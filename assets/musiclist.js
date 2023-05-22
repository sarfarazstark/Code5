let allMusic = [
  {
    name: "ocean", // name of the music
    img: "images/ocean.jpg", // image of the music
    mainMusic: "music/ocean.mp3", // main music
    others: [
      // also played with main music
      "music/ocean.mp3",
      "music/ocean2.mp3",
    ],
  }
];

console.log(allMusic[0].others[0]); // music/jungle.mp3
