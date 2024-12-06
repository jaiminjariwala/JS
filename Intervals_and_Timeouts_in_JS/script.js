function showTime() {
  const currentTime = new Date();
  const time = `Current Time: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}

/*
    -> Difference between setTimeout() and setInterval() function
    => setTimeout() executes the code only once after the specified delay(in milliseconds)
    => setInterval() executes the code repeatedly at the specified interval!
*/
setInterval(showTime, 1000);

// ======================= Creating a Stop-Watch =======================

const resumeTimerButton = document.getElementById("resume-timer-button");
const pauseTimerButton = document.getElementById("pause-timer-button");
const startTimerButton = document.getElementById("start-timer-button");

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;

// format the time with 2 digits, if value is less than 10 to display numbers appropriately
function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}
// initially displaying the numbers appropriately (for instance, 00:00:00✅ 0:0:0❌)
seconds.innerText = formatTime(secondsCount);
minutes.innerText = formatTime(minutesCount);
hours.innerText = formatTime(hoursCount);

// timer logic to increment seconds, minutes and hours
function looping() {
  secondsCount = secondsCount + 1;
  seconds.innerText = formatTime(secondsCount);

  if (secondsCount === 60) {
    secondsCount = 0; // making the secondsCount back to 0 in order to start from 1 again!
    minutesCount = minutesCount + 1;
    minutes.innerText = formatTime(minutesCount);

    if (minutesCount === 60) {
      minutesCount = 0;
      hoursCount = hoursCount + 1;
      hours.innerText = formatTime(hoursCount);
    }
  }
}

// when page loads, loopingInterval will be initialized to null, that is no timer interval is currently running!
let loopingInterval = null;

resumeTimerButton.addEventListener("click", () => {
  // Prevent multiple intervals from being created
  if (!loopingInterval) {   // not of loopingInterval means, a timer is already running!
    loopingInterval = setInterval(looping, 100);
  }
});
pauseTimerButton.addEventListener("click", () => {
  clearInterval(loopingInterval); // this function will clear interval from the memory and stops the timer!
  loopingInterval = null; // reset the interval ID to allow resuming
});
startTimerButton.addEventListener("click", () => {
  clearInterval(loopingInterval); // stop the timer
  loopingInterval = null; // reset the interval ID

  // resetting counts
  secondsCount = 0  
  minutesCount = 0
  hoursCount = 0

  // updating the display to reflect reset count
  seconds.innerText = formatTime(secondsCount);
  minutes.innerText = formatTime(minutesCount);
  hours.innerText = formatTime(hoursCount);
  
  loopingInterval = setInterval(looping, 100);
})