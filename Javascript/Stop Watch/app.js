const min = document.getElementById("min");
const sec = document.getElementById("sec");
const msec = document.getElementById("msec");
let interval;
const btn = document.getElementById("btn");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

function timer() {
    msec.innerHTML++;
    if (msec.innerHTML == 100) {
        sec.innerHTML++;
        msec.innerHTML = "00";
        if (sec.innerHTML == 60) {
            min.innerHTML++;
            sec.innerHTML = "00";
        }
    }
}

function startStop() {
    if (startStopBtn.innerHTML === "Start") {
        interval = setInterval(timer, 10);
        startStopBtn.innerHTML = "Stop";
    } else {
        clearInterval(interval);
        startStopBtn.innerHTML = "Start";
    }
}

function reset() {
    clearInterval(interval);
    min.innerHTML = "00";
    sec.innerHTML = "00";
    msec.innerHTML = "00";
    startStopBtn.innerHTML = "Start";
}

btn.addEventListener("click", function (e) {
    if (e.target.id === "startStop") {
        startStop();
    } else if (e.target.id === "reset") {
        reset();
    }
});
