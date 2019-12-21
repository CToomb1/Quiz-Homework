var timeLeftEl = document.querySelector("#time-left");
var startScreenEl = document.querySelector("#start-screen");
var startGameBtnEl = document.querySelector("#start-game-btn");
var quizContentEl = document.querySelector("#quiz-content");
var postGameEl = document.querySelector("#post-game-screen");
var userScoreEl = document.querySelector("#user-score");
var playAgainBtnEl = document.querySelector("#play-again-btn");

var currentQuestionIndex = 0;
var timerIntervalId = 0;
var score = 0;

var secondsLeft = 0;
var answer1BtnEl;
var answer2BtnEl;
var answer3BtnEl;
var answer4BtnEl;


function startGame() {
  var secondsLeft = 120;
  timeLeftEl.textContent = secondsLeft;

  userScoreEl.value = userScoreEl.defaultValue;

  var timerIntervalId = setInterval(function () {
    secondsLeft--;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      stopGame();
    }
  }, 1000);


  displayQuestions(0);
}

function displayQuestions(questionIndex) {
  if (questionIndex === questions.length) {

    return stopGame();

  }
  var currentQuestion = questions[questionIndex];
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.questions;


  var choicesEl = document.getElementById("choices");
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function (choice, i) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("value", choice);
    choiceButton.textContent = i + 1 + ". " + choice;
    choiceButton.onclick = questionClick;
    choicesEl.appendChild(choiceButton);
  });
}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    alert("Nope! Wrong Answer");
  } else {
    alert("You're Right! Way to Go!");
  }
  currentQuestionIndex++;
  displayQuestions(currentQuestionIndex);
}

function stopGame() { }

startGameBtnEl.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches("button") === true) {
    startScreenEl.setAttribute("class", "hide");

    quizContentEl.getAttribute("class");
    startGame();
  }
});


startGameBtnEl.addEventListener("click", startGame);

quizContentEl.addEventListener("click", function (event) {
  event.preventDefault();
});


playAgainBtnEl.addEventListener("click", playAgain);