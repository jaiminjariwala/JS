function showTime() {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById("time").innerText = time;
}

/*
    -> Difference between setTimeout() and setInterval() function
    => setTimeout() executes the code only once after the specified delay(in milliseconds)
    => setInterval() executes the code repeatedly at the specified interval!
*/
let interval = setInterval(showTime, 1000);

const button = document.getElementById("stop-timer-button");
button.addEventListener("click", () => {
  clearInterval(interval); // this function will clear interval from the memory!
});

// ================================================================================

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes")
const hours = document.getElementById("hours")

let secondsCount = 0
let minutesCount = 0
let hoursCount = 0

function looping() {
    seconds.innerText = secondsCount
    secondsCount = secondsCount + 1
    if (secondsCount === 59) {
        minutes.innerText = minutesCount
        minutesCount = minutesCount + 1
        if (minutesCount === 59) {
            hours.innerText = hoursCount
            hoursCount = hoursCount + 1
        }
    }
}

// looping()

// setInterval(looping, 300);
