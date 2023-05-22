const wrapper = document.querySelector(".wrapper")
const musics = wrapper.querySelector(".preset-music");
function playMusic() {
    const audio = new Audio(allMusic[2].musics[0]);
    console.log(audio);
    audio.play();
}