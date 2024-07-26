// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Underclass", artist: "King Krule ", genre: "Rock" },
  { title: "Ancient Frequencies ", artist: "Lapalux", genre: "Electronic" },
  { title: "Zaza", artist: "Mike", genre: "Hip Hop" },
  { title: "Stick to myself", artist: " V V N", genre: "Electronic" },
  { title: "Momo's", artist: "Connan Mockasin ", genre: "Rock" },
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Hip Hop",
  Drax: "R&B", // now remember The name e.g. "Drax"  will be the key  whilst "electronic" will be the value , This is importaant in the object.key method we will use
  Rocket: "Pop",
  Groot: "Electronic",
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre

//!!!For Full transparancy ive struggled majorly and therfore I used chatgpt and viewed how students worked through the code , I did take time to understand each line but This section is my weakest and requires me to study it further .  I dont feel acomplished on this section . I have booked a private session for next week  to better understand this

//I decided to rewrite the entire code since ive been struggling
//The two parameters for this function will be the guardians name and the songs they like
function generatePlaylist(guardians, songs) {
  return Object.entries(guardians).map(([guardian, favGenre]) => ({
    guardian,
    playlist: songs.filter(
      (song) => song.genre.toLowerCase().includes(favGenre.toLowerCase()) //is this needed
    ),
  }));
}

// Call generatePlaylist and display the playlists for each Guardian

const playlists = generatePlaylist(guardians, songs); //This line of code was missing the entire time
console.log(playlists);

//This will connect this js playlist  to the html
const playlistsDiv = document.getElementById("playlists");

// I am a bit stuck but got help on this issue of appending  throught the use of For.each
playlists.forEach(({ guardian, playlist }) => {
  const guardianDiv = document.createElement("div");
  guardianDiv.className = "playlist";

  //Im essentially using append to stick the code to the document
  const guardianName = document.createElement("h2");
  guardianName.textContent = `${guardian}'s Playlist`;
  guardianDiv.appendChild(guardianName);

  const songList = document.createElement("ul");
  playlist.forEach((song) => {
    const songItem = document.createElement("li");
    songItem.className = "song";

    const songTitle = document.createElement("span");
    songTitle.className = "song-title";
    songTitle.textContent = song.title;

    const songArtist = document.createElement("span");
    songArtist.textContent = ` by ${song.artist}`;

    songItem.appendChild(songTitle);
    songItem.appendChild(songArtist);
    songList.appendChild(songItem);
  });
  guardianDiv.appendChild(songList);

  // Append the Guardian's playlist div to the #playlists div
  playlistsDiv.appendChild(guardianDiv);
});

/*function generatePlaylist(guardians, songs) {
  const playlists = {}; //Im learning that we  first need to create an empty object in which we will push each team members favorite songs ,Still a bit confused by the logic of this
  Object.keys(guardians).map((guardianMember) => {
    const favGenre = guardians[guardianMember];
    playlists[guardianMember] = songs.filter((song) => song.genre === favGenre); ///For transparency i worked through this function myself but eventually needed the aid of chatgpt to help me complete it since i found it very difficult ,I will ask for help in a private coaching session on this

    return playlists;
  })

  */
