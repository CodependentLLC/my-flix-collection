// src/components/Search.tsx
import React, { useState } from 'react';
import { searchMedia } from '../api/tmdb';

type Media = {
  id: number;
  media_type: 'movie' | 'tv';
  title?: string;
  name?: string;
  poster_path: string;
  overview: string;
};

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Media[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await searchMedia(query);
      setResults(data);
      setError(null);
    } catch {
      setError('Search failed');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies or TV shows"
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {error && <div className="text-red-500">{error}</div>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((item) => (
          <div key={item.id} className="bg-white shadow rounded p-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="rounded"
            />
            <h2 className="text-lg font-bold mt-2">
              {item.title || item.name}
            </h2>
            <p className="text-sm">{item.overview?.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
