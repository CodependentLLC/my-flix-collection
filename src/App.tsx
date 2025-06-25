
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

function App() {
  const [library, setLibrary] = useState<Media[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLibrary() {
      try {
        const results = await Promise.all(
          myMovies.map(item => fetchMedia(item.id, item.type))
        );
        setLibrary(results);
      } catch (err) {
        setError('Failed to load data.');
      }
    }
    loadLibrary();
  }, []);

  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {library.map((item) => (
        <div key={item.id} className="bg-white shadow rounded p-2">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title || item.name}
            className="rounded"
          />
          <h2 className="text-lg font-bold mt-2">
            {item.title || item.name}
          </h2>
          <p className="text-sm">{item.overview.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default App;
