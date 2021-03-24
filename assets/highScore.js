// const highScoreDoc = document.querySelector("#highScoreBoard")
const userScore = document.querySelector("#userHighScore")
const scoreForm = document.querySelector("#scoreForm")
const nameInput = document.querySelector("#name")
const hsBoardDisplay = document.querySelector("#HsBoardDisplay")
const clearBoardDisplay = document.querySelector("#clearHS")

// store archive of high scores from storage and holds pushed data in JSON format to renderHighScore
let highScoreArchive;

// stores current use high Score for highScore
let userHighScore = ""

// stores name of player for addHighScore
playerName = ""

// retrieves high score for your after quiz complete (store in local as var are cleared after redirect)
// displays in span in h1
function highScore() {
    userHighScore = localStorage.getItem("currentUserScore");
    userScore.textContent = userHighScore;
}


// renders high scores on page load
function renderHighScore() {
    highScoreArchive = JSON.parse(localStorage.getItem("highScores"));
    if (!highScoreArchive) {
        highScoreArchive = []
    }

    if (highScoreArchive) {
        highScoreArchive.forEach(function (item) {
            var newLi = document.createElement("li");
            newLi.innerHTML = "Name: " + item["name"] + " Score: " + item["score"];
            hsBoardDisplay.appendChild(newLi)
        });
    }
}

// records users name for high score board
// check to see if name has been enter if not asks the your to entre valid name
// stores name and directs the user back the home page - index.html
function addHighScore() {
    player = nameInput.value;
    nameInput.value = "";
    nameInput.disabled = true;
    if (player) {
        highScoreArchive.push({
            name: player,
            score: userHighScore,
        })
        localStorage.setItem('highScores', JSON.stringify(highScoreArchive))
        document.location.href = "index.html"
    } else {
        alert("please enter a valid name")
        nameInput.disabled = false;
    }
}

// listens for form submit, prevents refresh and calls add score
scoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addHighScore();
})

// listens for click on clear high score button and clears high score board
clearBoardDisplay.addEventListener("click", () => {
    highScoreArchive = []
    localStorage.setItem("highScores", JSON.stringify(highScoreArchive))
    hsBoardDisplay.innerHTML = ""
})

renderHighScore()
highScore()




