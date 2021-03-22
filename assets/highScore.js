// const highScoreDoc = document.querySelector("#highScoreBoard")
const userScore = document.querySelector("#userHighScore")
const scoreForm = document.querySelector("#scoreForm")
const nameInput = document.querySelector("#name")

let highScoreArchive = []

let userHighScore = ""

playerName = ""

function highScore() {
    userHighScore = localStorage.getItem("currentUserScore")
    userScore.textContent = userHighScore
}

// function to build li with highscore object

function addHighScore() {
    player = nameInput.value
    // how to reset form?
    if (player !== "") {
        // away to build without typing out the below method/function?
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


highScore()




