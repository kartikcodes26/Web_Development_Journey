const timeLeft = document.querySelector(".Time-Left")
const playArea = document.querySelector(".play-area")
const cps = document.querySelector(".cps-value")
const times = document.querySelectorAll(".time-option")
const restart = document.querySelector(".Restart")
const startText = document.querySelector(".start")

let clicks = 0;
let selectedTime = 10;
let remainingTime = selectedTime;
const inputKeys = ["Space", "ArrowUp", "KeyW"]
let hasStarted = false;
let hasEnded = false;
let timer = null;

function greyTimeOptions() {
    times.forEach((item) => {
        item.style.background = "#d3d3d3";
    });
}

function colorTimeOptions() {
    times.forEach((item) => {
        item.style.background = "#fdffa2";
    });
}
function startSession() {
    hasStarted = true;
    greyTimeOptions()
}
function endSession() {
    hasEnded = true;
    showRestartMessage();
}
function displayCps() {
    cps.innerText = (clicks / selectedTime).toFixed(2).toString();
}
function showRestartMessage() {
    restart.style.display = "inline"
}
function hideRestartMessage() {
    restart.style.display = "none"
}

function registerClick() {
    if(hasEnded) {
        return ;
    }
    clicks++;
    startText.innerText = clicks.toString();
}

function TimeDecrement() {
    if(hasEnded) return ;
    timer = setInterval(() => {
        remainingTime--;
        timeLeft.innerText = remainingTime.toString();

        if(remainingTime <= 0) {
            clearInterval(timer);
            timer = null;
            endSession();
            displayCps();

        }
    }, 1000)
}
function setTime(toSetTime) {
    if(hasStarted) {
        return ;
    }
    selectedTime = toSetTime;
    remainingTime = toSetTime;
    timeLeft.innerText = selectedTime;
}

function restoreDefault() {
    hasStarted = false;
    hasEnded = false;
    clicks = 0;

    clearInterval(timer);
    timer = null;
    remainingTime = selectedTime;
    startText.innerText = "START";
    cps.innerText = 0;
    timeLeft.innerText = selectedTime;

    colorTimeOptions()
    hideRestartMessage()
}

times.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        setTime(e.currentTarget.dataset.duration);
    })
})

document.addEventListener("keydown", (event) => {
    if(event.code === "Enter") {
        restoreDefault();
    }
})

document.addEventListener("keydown", (event) => {
    if(inputKeys.includes(event.code)) {
        event.preventDefault();
        if (!event.repeat) {
            playArea.click();
        }
    }
})

playArea.addEventListener('click', () => {
   if(!hasStarted) {
        // Only scroll once when the game starts
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
        TimeDecrement();
    }

    startSession();
    registerClick();
})
