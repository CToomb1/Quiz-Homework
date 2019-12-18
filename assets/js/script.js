var timeLeftEl = document.querySelector("#time-left");
var startScreenEl = document.querySelector("#start-screen");
var startGameBtnEl = document.querySelector("#start-game-btn");
var quizContentEl = document.querySelector("#quiz-content");
var postGameEl = document.querySelector("#post-game-screen");
var userScoreEl = document.querySelector("#user-score");
var playAgainBtnEl = document.querySelector("#play-again-btn");
// time-left
// start game button
// start screen

// quiz content (event delegation. event listener attach to this)

// post-game screen
// user-score
// play again-btn

// create variables for game logic
  // timerIntervalId
  // score
  // secondsLeft

// create function to start game
  // set seconds left variable to starting time (300 seconds = 5 minutes)
  // write seconds left to the page

  // reset score to 0
  // write score to the page (optional)

  // hide start-screen element && post-game-screen
  // show quiz-content element

  // display first question
  displayQuestion(0);

  // set timer interval to setInterval function that decrements secondsLeft every second
  timerIntervalId = setInterval(function() {
    secondsLeft--;
    if (secondsLeft <= 0) {
      stopGame()
    }
  }, 1000);
// create function to display a question and possible choices
function displayQuestions(questionIndex) {
  // check if questionIndex in questions array doesn't exist
  if (!questions[questionIndex]) {
    // stop game weve hit the last question
    return stopGame();
  }
  // get questions[questionIndex]
  // print question to the page
  // use data attribute to know which index the question is
  // loop through choices and print out choices to the page (make them buttons)
}

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

// add event listeners
  // start game button (for starting the game)
  // quiz content (event delegation) - answering a question in the game
  // play again button