import React, { useState, useMemo } from 'react';
import { fetchTMDBSearch } from '../api/tmdb'; // You need to implement this

type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  overview: string;
};

type Props = {
  library: Media[];
};

const normalize = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9 ]/gi, '').trim();

export default function UnifiedSearch({ library }: Props) {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState<'library' | 'tmdb'>('library');
  const [tmdbResults, setTmdbResults] = useState<Media[]>([]);

  const filteredLibrary = useMemo(() => {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return library;

    return library.filter((item) => {
      const title = item.title || item.name || '';
      return normalize(title).includes(normalizedQuery);
    });
  }, [query, library]);

  async function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);

    if (scope === 'tmdb' && value.trim().length > 1) {
      const results = await fetchTMDBSearch(value);
      setTmdbResults(results);
    }
  }

  const results = scope === 'library' ? filteredLibrary : tmdbResults;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder={`Search ${scope === 'library' ? 'My Library' : 'TMDB'}...`}
          className="border p-2 rounded w-full mr-4"
        />
        <select
          value={scope}
          onChange={(e) => setScope(e.target.value as 'library' | 'tmdb')}
          className="border p-2 rounded"
        >
          <option value="library">My Library</option>
          <option value="tmdb">TMDB</option>
        </select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((item) => (
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
