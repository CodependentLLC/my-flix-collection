// src/data/myLibrary.ts

export type MediaType = "movie" | "tv";

export const myMovies: { id: number; type: MediaType }[] = [
//   { id: 550, type: "movie" }, // Fight Club
//   { id: 1399, type: "tv" },   // Game of Thrones
  { id: 105, type: 'movie' },        // Back to the Future
  { id: 165, type: 'movie' },        // Back to the Future II
  { id: 196, type: 'movie' },        // Back to the Future III
  { id: 433, type: 'movie' },        // Mary Poppins
  { id: 245891, type: 'movie' },     // John Wick
  { id: 969492, type: 'movie' },     // Land of Bad
  { id: 2140, type: 'tv' },          // Everybody Loves Raymond
  { id: 16366, type: 'movie' },      // Joseph: King of Dreams
  { id: 9331, type: 'movie' },       // Clear and Present Danger
  { id: 39514, type: 'movie' },      // Red (2010)
  { id: 1781, type: 'tv' },        // Little House on the Prairie (1974 TV series) :contentReference[oaicite:1]{index=1}
  { id: 10020, type: 'movie' },     // Beauty and the Beast (1991 animated film) :contentReference[oaicite:2]{index=2}
  { id: 10144, type: 'movie' },    // The Little Mermaid (2023 live-action) :contentReference[oaicite:3]{index=3}
  { id: 38757, type: 'movie' },     // Tangled (2010) :contentReference[oaicite:5]{index=5}
  { id: 49051, type: 'movie' },     // The Hobbit: An Unexpected Journey (2012) :contentReference[oaicite:6]{index=6}
  { id: 11886, type: 'movie' },     // Robin Hood (1973 animated) :contentReference[oaicite:7]{index=7}
//   { id: 150689, type: 'movie' },    // Cinderella (2015) :contentReference[oaicite:9]{index=9}
  { id: 316029, type: 'movie' },    // The Greatest Showman (2017) :contentReference[oaicite:10]{index=10}
  { id: 2501, type: 'movie' },       // The Bourne Identity (2002) :contentReference[oaicite:11]{index=11}
  { id: 2502, type: 'movie' },       // The Bourne Supremacy (2004) — *needs lookup*
  { id: 2503, type: 'movie' },       // The Bourne Ultimatum (2007) — *needs lookup*
  { id: 49040, type: 'movie' },     // The Bourne Legacy (2012) — *needs lookup*
  { id: 324668, type: 'movie' },    // Jason Bourne (2016) — *needs lookup*
];
