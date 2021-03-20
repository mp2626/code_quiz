// vars for game
var timer = document.querySelector("#timer")
var startQuiz = document.querySelector(".startQuiz")
var questionScreen = document.querySelector("#questions")



var timerClock = ""
var questionIndex = 0
var gameOver = false


var questionArray = [
    {
        question: "What is the meaning of API?",
        choices: ["Asset Program Interface", "Application Programing Interference", "Application Programming Interface",],
        answer: "Application Programming Interface"
    },
    {
        question: "In order to call a function once defined, you should use which of the following?",
        choices: ["[]", "()", "{}",],
        answer: "()"
    }
]

// timer function / check for win lose

function startGame() {
    startQuiz.style.display = "none";
    timerClock = 10;
    startTimer()
}

function startTimer() {
    clock = setInterval(function () {
        if (timerClock > 0) {
            timerClock--;
            timer.textContent = timerClock;
        }
        else {
            startQuiz.style.display = "";
            clearInterval(clock)
        }
    }, 1000)

    renderQuestions()
}

// fetch and render questions

function renderQuestions() {
    questionScreen.textContent = questionArray[questionIndex].question;
    questionIndex++;
}

// render options and remove for next question https://www.w3schools.com/jsref/met_element_remove.asp

// compare questions event and reset index?

// add to score/remove


// score reset and quiz reset


// high score add name to ul



// event listener 

startQuiz.addEventListener("click", startGame)

