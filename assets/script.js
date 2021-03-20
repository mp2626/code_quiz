// vars for game
var timer = document.querySelector("#timer")
var startClock = document.querySelector(".startTimerQuiz")
var questionArray = [
    {
        question: "What is the meaning of API",
        choices: ["Asset Program Interface", "Application Program Interference", "Application Programming Interface"]

    },
]


var timerClock = 2

// timer function / check for win lose

function startTimer() {
    startClock.style.display = "none";

    clock = setInterval(function () {
        if (timerClock > 0) {
            timerClock--;
            timer.textContent = timerClock;
        }
        if (timerClock <= 0) {
            return
        }
    }, 1000)
}



// fetch and render questions

function quizQuestions() {


}


// add to score/remove


// score reset


// high score add name to ul



// event listener 

startClock.addEventListener("click", startTimer)

