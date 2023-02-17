'use strict';

/*
console.log(document.querySelector('.message').textContent);

// Selecting and Manipulating Elements

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// Handling Click Events

const secretNumber = Math.trunc(Math.random() * 20) + 1; // incluindo o +1 garantimos que o resultado seja até o número 20, sem ele o resultado só iria até 19.9999
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🤨 No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--; // sempre que houver um palpite errado a pontução baixa em 1 ponto
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 Game Over';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--; //a pontuação é impressa no score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Implementing the Game Logic
