const currentTime = new Date();
let time = console.log(currentTime);
const clockElement = document.querySelector(".clock");
console.log(currentTime);
clock.textContent = currentTime;

function clock() {
  const currentTime = new Date();
  const hh = String(currentTime.getHours()).padStart(2, "0");
  const mm = String(currentTime.getMinutes()).padStart(2, "0");
  const ss = String(currentTime.getSeconds()).padStart(2, "0");

  clockElement.textContent = `${hh}:${mm}:${ss}`;
}

const intervalClock = setInterval(clock, 1000);
