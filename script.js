'use strict';

const generateRandom = () => Math.floor(Math.random() * 20) + 1;

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

const setScore = score =>
  (document.querySelector('.score').textContent = score);

const setHighscore = highScore =>
  (document.querySelector('.highscore').textContent = highScore);

let secretNumber = generateRandom();

let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore').textContent;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Enter a number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      setHighscore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game');
      setScore(score);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = generateRandom;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  setScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
