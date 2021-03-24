
const timer = document.querySelector("#timer");
const startQuiz = document.querySelector("#startQuiz");
const questionScreen = document.querySelector("#questions");
const answers = document.querySelector("#answers");
const enterButton = document.querySelector("#enter");

let timerClock = "";
let clock = "";
let questionIndex = 0;
let yourScore = "";

// questions for game
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

// enters user to quiz game page from welcome screen
function enterGame() {
    document.location.href = "question.html"
}

// hides the start quiz button and sets timer, then calls timer functions
function startGame() {
    startQuiz.style.display = "none";
    timerClock = 40;
    startTimer()
}

// starts countdown time and updates on screen and calls render question function
// stops clock when timer reaches 0 and calls close game function
function startTimer() {
    clock = setInterval(function () {
        if (timerClock > 0) {
            timerClock--;
            timer.textContent = timerClock;
        } else {
            clearInterval(clock)
            closeGame()
        }
    }, 1000)
    renderQuestions()
}

// fetches and renders question, and calls checkQuestion if question idex reaches limit. CheckQuestion can close game.
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

// Waits to be called from event listener, checks to see if question count has been exceeded.
// Checks if choice matches correct answer.
// Updates question count and renders next question or calls closes game.
function checkQuestion(event) {
    if (questionIndex !== 4) {
        var check = event.target
        console.log(check)
        if (check.textContent == questionArray[questionIndex].answer) {
            console.log("correct")
            timerClock += 5
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


// clears out out choices, and records score in local memory.
// Stops clock and directs user to highscore board.
function closeGame() {
    answers.innerHTML = ""
    questionScreen.innerHTML = ""
    yourScore = timerClock;
    timer.textContent = yourScore
    localStorage.setItem("currentUserScore", yourScore)
    clearInterval(clock)
    document.location.href = "highscore.html"
}

// waits for user to click enter on welcome screen and directs them to quiz page by calling enterGame
if (enterButton) {
    enterButton.addEventListener("click", enterGame);
}

// waits for user to click start game button and then call start game function.
if (startQuiz) {
    startQuiz.addEventListener("click", startGame);
}

// waits for user to click on li answers and then call checkQuestion
if (answers) {
    answers.addEventListener("click", checkQuestion);;
}

