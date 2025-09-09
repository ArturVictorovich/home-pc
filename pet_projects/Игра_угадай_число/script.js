'use strict';

let secreNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Загаданное число ${secreNumber}`);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector('.guess').value);
  // Когда не ввели число
  if (!guess) {
    displayMessage('Вы не ввели число!');
    /// Когда угадали
  } else if (guess === secreNumber) {
    displayMessage('Вы победили!');
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').textContent = guess;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Когда не угадали
  } else if (guess !== secreNumber) {
    if (score > 1) {
      if (guess > secreNumber) {
        displayMessage('Число больше');
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secreNumber) {
        displayMessage('Число меньше');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('Вы проиграли!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Начните угадывать');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = 'black';
});
