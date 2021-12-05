const stopWatch = document.querySelector(".stop-watch");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");

let ms = 0;
let sec = 0;
let minutes = 0;
let interval;

startButton.addEventListener("click", () => {
  console.log("start");
  interval = setInterval(start, 100);
});

stopButton.addEventListener("click", () => {
  stop(interval);
});

function stop(interval) {
  clearInterval(interval);
}

function start() {
  ms += 100;
  if (ms === 1000) {
    sec += 1;
    ms = 0;
  }
  if (sec === 60) {
    sec = 0;
    minutes += 1;
  }
  if (minutes === 60) stop();

  stopWatch.textContent = `${String(minutes).padStart(2, "0")}:${String(
    sec
  ).padStart(2, "0")}:${String(ms / 10).padStart(2, "0")}`;
}
