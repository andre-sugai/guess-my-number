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

let secretNumber = Math.trunc(Math.random() * 20) + 1; // incluindo o +1 garantimos que o resultado seja até o número 20, sem ele o resultado só iria até 19.9999
let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Quando o jogador coloca zero
  if (!guess) {
    document.querySelector('.message').textContent = '🤨 No number!';

    // Quando o jogador vence
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // Quando o jogador erra com um número maior
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--; // sempre que houver um palpite errado a pontução baixa em 1 ponto
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 Game Over';
      document.querySelector('.score').textContent = 0;
    }

    // Quando o jogador erra com um número menor
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
// Manipulating CSS Styles

// Coding Challenge #1

// Implement a game reset functionality, so that the player can make a new guess!

// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = ' ';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables

// 3. Restore the initial conditions of the message, number, score and guess input fields

// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK �
