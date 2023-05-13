let allmusic = [
  {
    name: "ocean", // name of the music
    img: "images/ocean.jpg", // image of the music
    mainMusic: "music/ocean.mp3", // main music
    musics: [
      // also played with main music
      "music/ocean.mp3",
      "music/ocean2.mp3",
    ],
  },
  {
    name: "field",
    img: "images/field.jpg",
    mainMusic: "music/field.mp3",
    musics: [],
  },
  {
    name: "jungle",
    img: "images/jungle.jpg",
    mainMusic: "music/jungle.mp3",
    wave: [
        "music/jungle.mp3", // The music
        "music/jungle2.mp3", // Image
        "Wave" // Name
    ],
  },
];

console.log(allmusic[2].wave[0]); // music/jungle.mp3
