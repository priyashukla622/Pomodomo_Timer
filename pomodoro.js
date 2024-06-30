
// const startEl = document.getElementById("start");
// const stopEl = document.getElementById("stop");
// const resetEl = document.getElementById("reset");
// const timerEl = document.getElementById("timer");

// let interval;
// let timeLeft = 1500;

// function updateTimer() {
//     let minutes = Math.floor(timeLeft / 60);
//     let seconds = timeLeft % 60;
//     let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
//     timerEl.innerHTML = formattedTime;
// }

// function startTimer() {
//     if (!interval) {
//         interval = setInterval(() => {
//             timeLeft--;
//             updateTimer();
//             if (timeLeft === 0) {
//                 clearInterval(interval);
//                 interval = null;
//                 alert("Time's up!");
//                 timeLeft = 1500;
//                 updateTimer();
//             }
//         }, 1000);
//         console.log("Timer started");
//     }
// }

// function stopTimer() {
//     clearInterval(interval);
//     interval = null;
//     console.log("Timer stopped");
// }

// function resetTimer() {
//     clearInterval(interval);
//     interval = null;
//     timeLeft = 1500;
//     updateTimer();
//     console.log("Timer reset");
// }

// startEl.addEventListener("click", startTimer);
// stopEl.addEventListener("click", stopTimer);
// resetEl.addEventListener("click", resetTimer);

// updateTimer();
const startEl = document.getElementById("start");
const pomodoroEl = document.getElementById("pomodoro");
const shortBreakEl = document.getElementById("short-break");
const longBreakEl = document.getElementById("long-break");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500; // Initial timer set to 25 minutes (1500 seconds)
let isTimerSet = false; // Flag to check if the timer is set
let isRunning = false; // Flag to check if the timer is running

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(interval);
        interval = null;
        isRunning = false;
        startEl.textContent = "Start";
        startEl.style.backgroundColor = startEl.style.backgroundColor === "green" ? "grey" : "green"; // Toggle color
    } else if (isTimerSet) {
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft === 0) {
                clearInterval(interval);
                interval = null;
                alert("Time's up!");
                timeLeft = 1500; // Reset timer to 25 minutes after completion
                updateTimer();
                isRunning = false;
                isTimerSet = false;
                startEl.textContent = "Start";
                startEl.style.backgroundColor = "grey"; // Reset to default color
            }
        }, 1000);
        isRunning = true;
        startEl.textContent = "Pause";
        startEl.style.backgroundColor = startEl.style.backgroundColor === "green" ? "grey" : "green"; // Toggle color
    }
    console.log(isRunning ? "Timer started" : "Timer paused");
}

function setPomodoro() {
    clearInterval(interval);
    interval = null;
    timeLeft = 1500; // 25 minutes for Pomodoro (1500 seconds)
    isTimerSet = true;
    isRunning = false;
    updateTimer();
    startEl.textContent = "Start";
    startEl.style.backgroundColor = "grey"; // Reset to default color
    toggleButtonColor(pomodoroEl);
}

function setShortBreak() {
    clearInterval(interval);
    interval = null;
    timeLeft = 300; // 5 minutes for short break (300 seconds)
    isTimerSet = true;
    isRunning = false;
    updateTimer();
    startEl.textContent = "Start";
    startEl.style.backgroundColor = "grey"; // Reset to default color
    toggleButtonColor(shortBreakEl);
}

function setLongBreak() {
    clearInterval(interval);
    interval = null;
    timeLeft = 900; // 15 minutes for long break (900 seconds)
    isTimerSet = true;
    isRunning = false;
    updateTimer();
    startEl.textContent = "Start";
    startEl.style.backgroundColor = "grey"; // Reset to default color
    toggleButtonColor(longBreakEl);
}

function toggleButtonColor(button) {
    button.style.backgroundColor = button.style.backgroundColor === "green" ?"grey": "green"; // Toggle color
}

startEl.addEventListener("click", toggleTimer);
pomodoroEl.addEventListener("click", setPomodoro);
shortBreakEl.addEventListener("click", setShortBreak);
longBreakEl.addEventListener("click", setLongBreak);

updateTimer();





