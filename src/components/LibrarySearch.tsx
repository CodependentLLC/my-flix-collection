import React, { useState, useMemo } from 'react';
import { fetchTMDBSearch } from '../api/tmdb';

type Media = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
  overview: string;
};

type Props = {
  library: Media[];
  onResults: (results: Media[]) => void;
};

const normalize = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9 ]/gi, '').trim();

export default function UnifiedSearch({ library, onResults }: Props) {
  const [query, setQuery] = useState('');
  const [scope, setScope] = useState<'library' | 'tmdb'>('library');

  async function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);

    if (scope === 'tmdb' && value.trim().length > 1) {
      const results = await fetchTMDBSearch(value);
      onResults(results);
    } else if (scope === 'library') {
      const normalized = normalize(value);
      const filtered = library.filter((item) => {
        const title = item.title || item.name || '';
        return normalize(title).includes(normalized);
      });
      onResults(filtered);
    } else {
      onResults([]);
    }
  }

  return (
    <div className="flex gap-2 items-center w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder={`Search ${scope === 'library' ? 'My Library' : 'TMDB'}...`}
        className="border p-2 rounded w-full"
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
  );
}
