timeSetup = document.querySelector("#alarmSet"); // Access to alarmset

timeCountdown = document.querySelector("#timeRemaining"); // Access to timeRemaining

let countdownInterval; // Variable to setup to 0 the countdown

function setAlarm() {
  const totalSeconds = parseInt(timeSetup.value, 10);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  
  timeCountdown.innerText = `Time Remaining: ${minutes}:${seconds}`;
  
  document.body.style.backgroundColor = ""; // Reset background color

}


function startCountdown() {

  let totalSeconds = parseInt(timeSetup.value, 10);  //Convert the the string seconds to a number

  if (isNaN(totalSeconds) || totalSeconds <= 0) {
    timeCountdown.innerText = "Please enter a valid time.";   // Return if the input is not a number or less than or equal to 0
    return;
  }

  clearInterval(countdownInterval); // Stop previous countdown if any

  countdownInterval = setInterval(() => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    timeCountdown.innerText = `Time Remaining: ${minutes}:${seconds}`;

    if (totalSeconds <= 0) {
      clearInterval(countdownInterval);
      timeCountdown.innerText = "Time's up!";
      
      document.body.style.backgroundColor = "#ff4c4c"; // Change background color Bright red

      playAlarm();  // Play the alarm sound when the countdown reaches zero
    }

    totalSeconds--;
  }, 1000);

}




// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
  setAlarm();  // Sets the initial time display
  startCountdown(); // Starts the actual countdown
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play(); // Play the alarm sound
}

function pauseAlarm() {
  audio.pause();  // Stop the alarm sound
}

window.onload = setup;

