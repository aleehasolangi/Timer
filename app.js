var DMIN = document.getElementById("DMIN");
var DSEC = document.getElementById("DSEC");

var min = 1;
var sec = 0;
var interval;

function showTime() {
  DMIN.innerHTML = min;
  DSEC.innerHTML = sec;
}

function timer() {
  sec = sec - 1;
  if (sec < 0) {
    sec = 59;
    min = min - 1;
  }
  if (min < 0) {
    min = 0;
    sec = 0;
    clearInterval(interval);
  }
  showTime();
}

function startTimer() {
  interval = setInterval(timer, 1000);
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  min = 1;
  sec = 0;
  showTime();
}
