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
startGame();

function startGame() {
    var secondsLeft = 300;

    timeLeftEl.textContent = secondsLeft;

    userScoreEl.value = userScoreEl.defaultValue;

};

startGameBtnEl.addEventListener("click", function(event) {
    var element = event.target;
  
    if (element.matches("button") === true) {
    startScreenEl.setAttribute("class", "hide");
    
    quizContentEl.getAttribute("class");
  }
  
     displayQuestions(0);
  });

  var timerIntervalId = setInterval(function() {
    secondsLeft--;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      stopGame()
    }
  }, 1000);

function displayQuestions() {
  var questionsArr = Math.floor(Math.random() * questions.length);
  var questionIndex = questionsArr.length;

  if (!questions[questionIndex]) {

    return stopGame();
  };

quizContentEl.textContent = questions[questionIndex];
};
quizContentEl.getAttribute(questions[questionIndex]);
quizContentEl.append(questions[questionIndex]);
quizContentEl.setAttribute("data-index", [questionIndex]);

for (var i = 0; i > questions.length; i++)

// create function to handle user's answering
// use event delegation to make sure button was clicked
// read data attribute of what question we answered (index)
// check to see if choice picked is same as questions correct answer
// if yes, increase score++
// if no, subract time from secondsLeft

// get index of next question (this questions index +1)
// run displayQuestion(nextQuestionIndex)

// create a function to stop the game (answering all the questions or time has run out)
// clearInterval() to stop the timer
// hide quiz-content element
// show post-game-screen
// print out user score

startGameBtnEl.addEventListener("click", startGame);

quizContentEl.addEventListener("click", function(event) {
  event.preventDefault();
});

playAgainBtnEl.addEventListener("click", playAgain);