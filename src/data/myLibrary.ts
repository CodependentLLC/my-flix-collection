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
  { id: 812, type: 'movie' },     // Aladdin (1992 animated) :contentReference[oaicite:1]{index=1}
  { id: 420817, type: 'movie' },  // Aladdin (2019 live‑action) :contentReference[oaicite:2]{index=2}
  { id: 373571, type: 'movie' }, // Godzilla: King of the Monsters (2019) :contentReference[oaicite:1]{index=1}
  { id: 39107, type: 'tv' },     // Bubble Guppies (TV series) :contentReference[oaicite:2]{index=2}
  { id: 11395, type: 'movie' },    // The Santa Clause (1994) :contentReference[oaicite:2]{index=2}
  { id: 361743, type: 'movie' },   // Top Gun: Maverick (2022) :contentReference[oaicite:3]{index=3}
  { id: 299534, type: 'movie' },   // Avengers: Endgame (2019) :contentReference[oaicite:4]{index=4}
  { id: 447332, type: 'movie' },  // A Quiet Place (2018) :contentReference[oaicite:7]{index=7}
  { id: 520763, type: 'movie' },  // A Quiet Place Part II (2021) :contentReference[oaicite:8]{index=8}
  {id: 20662, type: 'movie' }, //Robin Hood
  {id: 11224, type: 'movie' }, //Cinderella
  {id: 602, type: 'movie' }, //Independence Day
  {id: 121, type: 'movie' }, //The Lord of the Rings: The Two Towers
  {id: 122, type: 'movie' }, //The Lord of the Rings: The Return of the King
  {id: 13187, type: 'movie' }, //Charlie Brown Christmas
  {id: 380479, type: 'movie' }, //Road Runner & Wile E. Coyote
  {id: 10159, type: 'movie' }, //Rundown
  {id: 476968, type: 'movie' }, //Paul Apostle of Christ
  {id: 293167, type: 'movie' }, //Kong Skull Island
  {id: 272811, type: 'movie' }, //Saint Nicholas VeggieTales
  {id: 8871, type: 'movie' }, //How the Grinch Stole Christmas
  {id: 9340, type: 'movie' }, //The Goonies
  {id: 355547, type: 'movie' }, //The Star
  {id: 13965, type: 'movie' }, //Return to Snowy River
  {id: 408, type: 'movie' }, //Snow White and the Seven Dwarfs
  {id: 69, type: 'movie' }, //Walk the Line
  {id: 22794, type: 'movie' }, //Cloudy with a chance of meatballs
  {id: 557, type: 'movie' }, //Spider-Man
  {id: 7518, type: 'movie' }, //Over the Hedge
  {id: 11430, type: 'movie' }, //Lion King 1 1/2
  {id: 502356, type: 'movie' }, //Super Mario Bros Movie
  {id: 2059, type: 'movie' }, //National Treasure
  {id: 6637, type: 'movie' }, //National Treasure 2
  {id: 11970, type: 'movie' }, //Hercules
  {id: 615, type: 'movie' }, //The Passion of the Christ
  {id: 22, type: 'movie' }, //Pirates of the Caribbean
  {id: 9836, type: 'movie' }, //Happy Feet
  {id: 597, type: 'movie' }, //Titanic
  {id: 271164, type: 'movie' }, //The Song
  {id: 940551, type: 'movie' }, //Migration
  {id: 33907, type: 'tv' }, //Downton Abbey
  {id: 2062, type: 'movie' }, //Ratatouille
  {id: 14813, type: 'tv' }, //Mickey's Christmas Carol
  {id: 27205, type: 'movie' }, //Inception
  {id: 13667, type: 'movie' }, //Better off Dead
//   {id: 21195, type: 'tv' }, //The Berenstein Bears
  {id: 9487, type: 'movie' }, //A Bugs Life
  {id: 13673, type: 'movie' }, //Christmas with the Kranks
  {id: 1726, type: 'movie' }, //Ironman
  {id: 22660, type: 'movie' }, //Old Yelloer
  {id: 8587, type: 'movie' }, //Lion King
  {id: 399566, type: 'movie' }, //Godzilla vs. Kong
  {id: 808, type: 'movie' }, //Shrek
  {id: 10340, type: 'movie' }, //Lady and the Tramp
  {id: 339419, type: 'movie' }, //Loving
  {id: 2018, type: 'movie' }, //The Wedding Planner
  {id: 331, type: 'movie' }, //Jurassic Park III
  {id: 2454, type: 'movie' }, //Narnia Prince Caspian
  {id: 12230, type: 'movie' }, //101 Dalmations
  {id: 35691, type: 'movie' }, //Letters to God
  {id: 87, type: 'movie' }, //Indiana Jones Temple of Doom
  {id: 338169, type: 'movie' }, //Strawberry Shortcake Berry Best Show
  {id: 810, type: 'movie' }, //Shrek 3D
  {id: 288767, type: 'movie' }, //Pixar Shortfilms
  {id: 6038, type: 'movie' }, //Shanghai Knights
  {id: 7518, type: 'movie' }, //Over the hedge
  {id: 5255, type: 'movie' }, //The Polar Express
  {id: 4523, type: 'movie' }, //Enchanted
  {id: 14438, type: 'movie' }, //Fireproof
  {id: 585244, type: 'movie' }, //I still believe
  {id: 9833, type: 'movie' }, //The phantom of the opera
  {id: 10195, type: 'movie' }, //Thor
  {id: 81310, type: 'movie' }, //Winnie the Pooh
  {id: 953, type: 'movie' }, //Madagascar
  {id: 770, type: 'movie' }, //Gone with the Wind
  {id: 137094, type: 'movie' }, //Jack Ryan Shadow Recruit
  {id: 15400, type: 'movie' }, //Mickey's One upon a christmas
  {id: 14811, type: 'movie' }, //Fiddler on the roof
  {id: 2493, type: 'movie' }, //Princess Bride
  {id: 11362, type: 'movie' }, //The count of monte christo
  {id: 46195, type: 'movie' }, //Rio
  {id: 564, type: 'movie' }, //The Mummy
//   {id: 161123, type: 'tv' }, //The Book of Esther
  {id: 82695, type: 'movie' }, //Les Miserables
  {id: 70160, type: 'movie' }, //The Hunger Games
  {id: 527776, type: 'movie' }, //Overcomer
  {id: 43899, type: 'tv' }, //The Bible
  {id: 20352, type: 'movie' }, //Despicable Me
  {id: 9994, type: 'movie' }, //The Great Mouse Detective
  {id: 866, type: 'movie' }, //Finding Neverland
  {id: 25602, type: 'movie' }, //Ninja
  {id: 15797, type: 'movie' }, //Only the Strong
  {id: 1448210, type: 'movie' }, //20 Tiger Tales
  {id: 258489, type: 'movie' }, //Tarzan
  {id: 3638, type: 'movie' }, //No Reservations
  {id: 11529, type: 'movie' }, //Sweet Home Alabama
  {id: 397, type: 'tv' }, //The Dukes of Hazzard
  {id: 12144, type: 'movie' }, //The Land Before Time
  {id: 6947, type: 'movie' }, //The Village
  {id: 24021, type: 'movie' }, //Twilight Eclipse
  {id: 390641, type: 'movie' }, //Vaxxed
  {id: 11128, type: 'movie' }, //Ladder 49
  {id: 330, type: 'movie' }, //the Lost world
  {id: 6023, type: 'movie' }, //p.s. i love you
  {id: 10366, type: 'movie' }, //universal soldier the return
  {id: 23849, type: 'movie' }, //Garfield as Himself
  {id: 11036, type: 'movie' }, //The Notebook
  {id: 9325, type: 'movie' }, //The JungleBook
//   {id: 17979, type: 'movie' }, //A Christmas Carol
  {id: 10478, type: 'movie' }, //Tin Cup
  {id: 771, type: 'movie' }, //Home Alone
  {id: 24428, type: 'movie' }, //The Avengers
  {id: 27578, type: 'movie' }, //The Expendables
  {id: 76163, type: 'movie' }, //The Expendables 2
  {id: 138103, type: 'movie' }, //The Expendables 3
  {id: 73938, type: 'movie' }, //Tim Hawkins Insanitized
  {id: 11665, type: 'movie' }, //Get Smart
  {id: 18239, type: 'movie' }, //Twilight New Moon
  {id: 10371, type: 'movie' }, //For Richer or Poorer
  {id: 1453158, type: 'movie' }, //Get Away Jordan
  {id: 50619, type: 'movie' }, //Twilight Breaking Dawn Part 1
  {id: 50620, type: 'movie' }, //Twilight Breaking Dawn Part 2
  {id: 95, type: 'movie' }, //Armageddon
  {id: 593495, type: 'movie' }, //The Reliant
  {id: 809, type: 'movie' }, //Shrek 2
  {id: 12312, type: 'movie' }, //Joe Somebody
  {id: 27576, type: 'movie' }, //Salt
  {id: 44943, type: 'movie' }, //Battle: Los Angeles
  {id: 676, type: 'movie' }, //Pearl Harbor
  {id: 559, type: 'movie' }, //Spiderman 3
  {id: 34544, type: 'movie' }, //The A-Team
  {id: 546554, type: 'movie' }, //Knives Out
  {id: 678512, type: 'movie' }, //Sound of Freedom
  {id: 37302, type: 'movie' }, //Left Behind (2000)
  {id: 157350, type: 'movie' }, //Divergent
  {id: 262500, type: 'movie' }, //Insurgent
  {id: 9312, type: 'movie' }, //The Man in the Iron Mask
  {id: 13938, type: 'movie' }, //The Last Dragon
  {id: 11199, type: 'movie' }, //Wild Hogs
  {id: 4643, type: 'movie' }, //The Guardian
  {id: 8005, type: 'movie' }, //Robin Hood: Men in Tights
  {id: 921, type: 'movie' }, //Cinderella Man
  {id: 2621, type: 'movie' }, //Return to Me
  {id: 45862, type: 'movie' }, //Hangman's Curse
  {id: 197, type: 'movie' }, //Braveheart
  {id: 4709, type: 'tv' }, //Man vs. Wild
  {id: 19649, type: 'tv' }, //Jesus of Nazareth
  {id: 7485, type: 'movie' }, //Shooter
  {id: 56292, type: 'movie' }, //Mission: Impossible â€“ Ghost Protocol
  {id: 57532, type: 'tv' }, //Paw Patrol
  {id: 33347, type: 'tv' }, //Angelica Ballerina
  {id: 411, type: 'movie' }, //Chronicles of Narnia
  {id: 429351, type: 'movie' }, //12 Strong
  {id: 87826, type: 'movie' }, //Here Comes the Boom
  {id: 10229, type: 'movie' }, //A Walk to Remember
  {id: 795, type: 'movie' }, //City of Angels
  {id: 9919, type: 'movie' }, //How to Lose a Guy in 10 Days
  {id: 2024, type: 'movie' }, //Hitch
  {id: 8681, type: 'movie' }, //Taken
  {id: 82675, type: 'movie' }, //Taken 2
  {id: 146216, type: 'movie' }, //Red 2
  {id: 214177, type: 'tv' }, //Navy Seals
  {id: 10545, type: 'movie' }, //The Hunchback of Notre Dame
  {id: 75674, type: 'movie' }, //Act of Valor
  {id: 567189, type: 'movie' }, //Without Remorse
  {id: 5994, type: 'movie' }, //The Family Man
  {id: 206284, type: 'movie' }, //Grace Unplugged
  {id: 284513, type: 'tv' }, //Patterns of Evidence: Exodus
  {id: 10948, type: 'movie' }, //The Fox and the Hound
  {id: 13675, type: 'movie' }, //Frosty the Snowman
  {id: 9567, type: 'movie' }, //Tears of the Sun
  {id: 2080, type: 'movie' }, //X-Men Origins: Wolverine
  {id: 920, type: 'movie' }, //Cars
  {id: 13027, type: 'movie' }, //Eagle Eye
  {id: 49026, type: 'movie' }, //The Dark Knight Rises
  {id: 2024, type: 'movie' }, //The Patriot
  {id: 59440, type: 'movie' }, //Warrior
  {id: 232679, type: 'movie' }, //When the Game Stands Tall
  {id: 760532, type: 'movie' }, //small group
  {id: 8966, type: 'movie' }, //Twilight
  {id: 6479, type: 'movie' }, //I Am Legend
  {id: 15173, type: 'movie' }, //VeggieTales: Jonah
  {id: 15511, type: 'movie' }, //VeggieTales: The Pirates Who Don't Do Anything
  {id: 788, type: 'movie' }, //Mrs. Doubtfire
  {id: 558, type: 'movie' }, //Spider-Man 2
  {id: 155, type: 'movie' }, //The Dark Knight
  {id: 11690, type: 'movie' }, //Bloodsport
  {id: 503811, type: 'movie' }, //Like Arrows
  {id: 272, type: 'movie' }, //Batman Begins
  {id: 273578, type: 'movie' }, //VeggieTales: The Balld of Little Joe
  {id: 14160, type: 'movie' }, //Up
  {id: 12, type: 'movie' }, //Finding Nemo
  {id: 50406, type: 'movie' }, //Bugs Bunny Easter Funnies
  {id: 1885, type: 'movie' }, //Karate Kid
];
  