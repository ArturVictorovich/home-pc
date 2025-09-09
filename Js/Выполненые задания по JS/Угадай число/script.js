"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
let score = 20;
let highscore = 0;



const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function() {
    let guess = Number(document.querySelector(".guess").value)
    console.log(guess)
// Когда ничего не ввели
    if (!guess) {
        displayMessage("Вы не ввели число!")

// Когда угадал
    } else if (guess === secretNumber) {
        displayMessage("Вы победили, гг вп")
        document.querySelector(".number").textContent = secretNumber

        // Рекорд
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        } 

        // Когда не угадал
    } else if (guess !== secretNumber) {
       if (score > 1) {
        if (guess > secretNumber) {
            displayMessage("Слишком много")
            score--;
            document.querySelector(".score").textContent = score;
        } else if(guess < secretNumber) {
            displayMessage("Слишком мало");
            score--;
            document.querySelector(".score").textContent = score;
        }
            // когда проиграл
       } else {
        displayMessage("Ты залузал, нажми кнопку снова!")
        document.querySelector(".score").textContent = 0 ;
       }
    } 
    

})

// Кнопка снова!
document.querySelector(".again").addEventListener("click", function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber)
    document.querySelector(".number").textContent = "?";
    displayMessage("Начните угадывать");
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "";
})
