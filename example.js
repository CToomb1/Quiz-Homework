var timeLeftEl = document.querySelector("#time-left");
var startScreenEl = document.querySelector("#start-screen");
var startGameBtnEl = document.querySelector("#start-game-btn");
var quizContentEl = document.querySelector("#quiz-content");
var postGameEl = document.querySelector("#post-game-screen");
var userScoreEl = document.querySelector("#user-score");
var playAgainBtnEl = document.querySelector("#play-again-btn");


var timerIntervalId = 0;
var score = 0;
var secondsLeft = 0;
var answer1BtnEl;
var answer2BtnEl;
var answer3BtnEl;
var answer4BtnEl;
startGame();

function startGame() {
    var secondsLeft = 300;
    timeLeftEl.textContent = secondsLeft;
    userScoreEl.value = userScoreEl.defaultValue;
    startGameBtnEl.addEventListener("click", function (event) {
        var element = event.target;
        if (element.matches("button") === true) {
            startScreenEl.setAttribute("class", "hide");
            quizContentEl.getAttribute("class");
        };

    });
}
displayQuestions(0);
var timerIntervalId = setInterval(function () {
    secondsLeft--;
    if (secondsLeft === 0) {
        clearInterval(timeInterval);
        stopGame()
    }
}, 1000);

function displayQuestions(questionIndex) {
    if (questionIndex === questions.length) {
        return stopGame();
    }

    var currentQuestion = questions[questionIndex];

    var containerEl = document.createElement("div");
    containerEl.questions.add("card");
    containerEl.setAttribute("data-question-index", questionIndex);
    for (var i = 0; i > currentQuestions.choices[i]; i++) {
        console.log("hi");
    }

};

function stopGame() {

}
startGameBtnEl.addEventListener("click", startGame);
quizContentEl.addEventListener("click", function (event) {
    event.preventDefault();
});
playAgainBtnEl.addEventListener("click", playAgain);