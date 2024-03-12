"use strict";

// displayMessage function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// displayNumber function
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayNumberStyles = function (number) {
  document.querySelector(".number").style.width = number;
};

// displayBodyStyles function
const displayBodyStyles = function (bg) {
  document.querySelector("body").style.backgroundColor = bg;
}

// displayScore function
const displayScore = function (actualScore) {
  document.querySelector(".score").textContent = actualScore;
}


// so here, basically we need to a secret number btw 0-20
let computerGuess = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0; // lets implement the high score

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // When there is no Number
  if (!guess) {
    displayMessage("🚫 No Number!");

    // When Number is correct and wins
  } else if (guess === computerGuess) {
    displayMessage("✨Correct Number");
    displayNumber(computerGuess);

    // lets add some styling if user wins
    displayBodyStyles("#60b347");
    displayNumberStyles("23rem");
    // lets implement the high score
    if (score > highScore) {
      highScore = score;

      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== computerGuess) {
    if (score > 1) {
      displayMessage(guess > computerGuess ? "📈Too High" : "📉Too Low");
      score--;
      displayScore(score)
    } else {
      // lets add some styling if user loses
      displayMessage("⛔You lose");
      displayScore(0)
      displayBodyStyles("red");
      displayNumberStyles("15rem");
    }
  }
});

// here we reset the game by clicking the again button
document.querySelector(".again").addEventListener("click", function () {
  //     // initial condition of the score
  score = 20;
  computerGuess = Math.trunc(Math.random() * 20) + 1; //so  we are calling back the computerGuess number so it will guess another number as we reset the game
  displayScore(score)

  //   // initial condition of the message
  displayMessage("Start guessing...");

  //// initial conditions of the number
  displayNumber("?");
  displayNumberStyles("15rem");
  displayBodyStyles("#222");

  //   // initial condition of the guess input
  document.querySelector(".guess").value = "";
});
