'use strict';

let showPopUp = (n) => {
  const showWhatever = document.querySelector(n);
  showWhatever.style.display = 'flex';
};
let closePopUp = (n) => {
  const closeWhatever = document.querySelector(n);
  closeWhatever.style.display = 'none';
};

function changeTime(n, m) {
  console.log(n);
  if(n == 5){
    document.querySelector(".BREAK_TIME_IN_MINUTE").innerHTML = '05';
    closePopUp(m);
  } else {
    document.querySelector(".BREAK_TIME_IN_MINUTE").innerHTML = n;
    closePopUp(m);
  }
}
const vol = document.querySelectorAll('.volume');
vol.forEach((item) => {
  item.addEventListener('change', (e) => {
    const value = e.target.value;
  })
})

function playMusic(){
  let main = document.querySelector("main");
  let dText = main.querySelector(".details-text");
  console.log(dText);
  dText.innerHTML = "Hello";
}