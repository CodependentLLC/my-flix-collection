import React, { useEffect, useState } from 'react';
import { myMovies } from './data/myLibrary';
import { fetchMedia } from './api/tmdb';

type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  overview: string;
};

type UnifiedSearchProps = {
  library: Media[];
  onResults: (results: Media[]) => void;
};

function UnifiedSearch({ library, onResults }: UnifiedSearchProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      onResults(library);
      return;
    }
    const lower = query.toLowerCase();
    const filtered = library.filter(
      (item) =>
        item.title?.toLowerCase().includes(lower) ||
        item.name?.toLowerCase().includes(lower)
    );
    onResults(filtered);
  }, [query, library, onResults]);

  return (
    <div className="px-4 py-3 bg-white shadow-md">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  );
}

function App() {
  const [library, setLibrary] = useState<Media[]>([]);
  const [displayed, setDisplayed] = useState<Media[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLibrary() {
      try {
        const uniqueMovies = Array.from(
          new Map(myMovies.map((item) => [item.id, item])).values()
        );
        const results = await Promise.all(
          uniqueMovies.map((item) => fetchMedia(item.id, item.type))
        );
        const filteredResults = results.filter(Boolean) as Media[];
        setLibrary(filteredResults);
        setDisplayed(filteredResults);
      } catch {
        setError('Failed to load data.');
      }
    }
    loadLibrary();
  }, []);

  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div>
      {/* Header */}
      <header className="p-4 bg-black shadow-sm border-b">
        <h1
          className="text-4xl font-bold uppercase flex items-center gap-2"
          style={{
            fontFamily: "'Anton', sans-serif",
            color: "#E50914",
            fontWeight: 'normal',
            letterSpacing: '.25em',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          <span role="img" aria-label="movie" style={{ fontSize: '1.8rem', lineHeight: 1 }}>
            🎬
          </span>
          myFlix
        </h1>
      </header>

      {/* Search Bar Section */}
      <UnifiedSearch library={library} onResults={setDisplayed} />

      {/* Grid Results */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {displayed.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="rounded"
            />
            <h2 className="text-lg font-bold mt-2">{item.title || item.name}</h2>
            <p className="text-sm">{item.overview?.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
