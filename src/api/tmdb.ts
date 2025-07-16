const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMedia(id: number, type: 'movie' | 'tv') {
//   console.log('API KEY:', API_KEY);
  const res = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function searchMedia(query: string) {
  const res = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error('Search failed');
  const data = await res.json();
  return data.results;
}

export async function fetchTMDBSearch(query: string) {
  const url = `${BASE_URL}/search/multi?query=${encodeURIComponent(query)}&api_key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return data.results.filter((item: any) =>
    ['movie', 'tv'].includes(item.media_type)
  ).map((item: any) => ({
    id: item.id,
    title: item.title,
    name: item.name,
    overview: item.overview,
    poster_path: item.poster_path,
  }));
}