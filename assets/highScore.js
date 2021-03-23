// const highScoreDoc = document.querySelector("#highScoreBoard")
const userScore = document.querySelector("#userHighScore")
const scoreForm = document.querySelector("#scoreForm")
const nameInput = document.querySelector("#name")
const hsBoardDisplay = document.querySelector("#HsBoardDisplay")


let highScoreArchive;

let userHighScore = ""

playerName = ""

function highScore() {
    userHighScore = localStorage.getItem("currentUserScore");
    userScore.textContent = userHighScore;
}

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

    } else {
        alert("please enter a valid name")
    }
}


scoreForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addHighScore();
})

renderHighScore()
highScore()




