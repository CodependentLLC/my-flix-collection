const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMedia(id: number, type: 'movie' | 'tv') {
//   console.log('API KEY:', API_KEY);
  const res = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}
