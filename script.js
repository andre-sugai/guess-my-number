'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (secret) {
  document.querySelector('.number').textContent = secret;
};

const displayGuess = function (guess) {
  document.querySelector('.guess').value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🤨 No number!');

    // Quando o jogador vence
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayBody('#60b347');
    displayWidth('30rem');
    displayNumber(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');

      score--;

      displayScore(score);
    } else {
      displayMessage('🤯 Game Over');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ' ';
  displayBody('#222');
  displayWidth('15rem');
});

// Modal

const howToPlay = document.querySelector('.howToPlay');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');

console.log(howToPlay);

howToPlay.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnClose.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
