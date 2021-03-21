// vars for game
const timer = document.querySelector("#timer");
const startQuiz = document.querySelector(".startQuiz");
const questionScreen = document.querySelector("#questions");
const answers = document.querySelector("#answers");



let timerClock = "";
let clock = ""
let questionIndex = 0;
let yourScore = "";
let gameOver = false;


const questionArray = [
    {
        question: "What is the meaning of API?",
        choices: ["Asset Program Interface", "Application Programing Interference", "Application Programming Interface"],
        answer: "Application Programming Interface"
    },
    {
        question: "In order to call a function once defined, you should use which of the following?",
        choices: ["[]", "()", "{}"],
        answer: "()"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["link", "script", "javascript"],
        answer: "script"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["function:myFunction()", "function = myFunction()", "function myFunction()"],
        answer: "function myFunction()"
    }
]

// timer function / check for win lose
function startGame() {
    startQuiz.style.display = "none";
    timerClock = 60;
    startTimer()
}

function startTimer() {
    clock = setInterval(function () {
        if (timerClock > 0) {
            timerClock--;
            timer.textContent = timerClock;
        }
    }, 1000)
    renderQuestions()
}

// fetch and render questions

function renderQuestions() {

    if (questionIndex !== 4) {
        answers.innerHTML = ""
        questionScreen.textContent = questionArray[questionIndex].question;
        for (var i = 0; i < questionArray[questionIndex].choices.length; i++) {
            var newLi = document.createElement("li");
            newLi.innerHTML = questionArray[questionIndex].choices[i];
            document.getElementById("answers").appendChild(newLi)
        }
    } else {
        checkQuestion()
    }
}

// compare questions event and reset index?
function checkQuestion(event) {

    if (questionIndex !== 4) {
        var check = event.target
        console.log(check)
        if (check.textContent == questionArray[questionIndex].answer) {
            console.log("correct")
            timerClock += 10
        } else {
            console.log("nah")
            timerClock -= 10
        }
        questionIndex++;
        renderQuestions()
    } else {
        closeGame()
    }
}

function closeGame() {
    answers.innerHTML = ""
    questionScreen.innerHTML = ""
    yourScore = timerClock;
    timer.textContent = yourScore
    console.log(yourScore);
    clearInterval(clock)
    highScore()
}

function highScore() {
    document.location.href = ""
}

// add to score/remove


// score reset and quiz reset


// high score add name to ul



// event listener 

startQuiz.addEventListener("click", startGame)
answers.addEventListener("click", checkQuestion)

