"use strict";

const account1 = {
  owner: "Dmitrii Fokeev",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
};

const account2 = {
  owner: "Anna Filimonova",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
};

const account3 = {
  owner: "Polina Filimonova",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
};

const account4 = {
  owner: "Stanislav Ivanchenko",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");


// показывает историю операций на главном экране
function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a,b) => a-b) : movements

  movs.forEach(function (value, i) {
    const transaction = value > 0 ? "зачисление" : "снятие"
    const type = value > 0 ? "deposit" : "withdrawal"
    const html = `
    
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${i + 1} ${transaction}
          </div>
          <div class="movements__date">3 дня назад</div>
          <div class="movements__value">${value}₽</div>
        </div>

    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};


// делает логин и добавляет его в кажый обьект
function createLog (accs) {
  accs.forEach(function(acc){
    acc.logIn = acc.owner.toLocaleLowerCase().split(" ").map(value => value[0]).join("")
  })
};
createLog(accounts)



// отображает баланс на главном экране
function culcBalance (acc) {
  acc.balance = acc.movements.reduce(function(acc, value){
    return acc + value
  });
  labelBalance.textContent = `${acc.balance} RUB`
}



// отображает историю операций под главным табло
function culcDownBalance (movements) {
  
  const out = movements
  .filter(val => val < 0)
  .reduce((acc, val) => acc + val, 0)
  labelSumOut.textContent = `${Math.abs(out)} ₽`
  const income = movements
  .filter(val => val > 0)
  .reduce((acc, val) => acc + val, 0)
  labelSumIn.textContent = `${income} ₽`
  labelSumInterest.textContent = income + out
}
culcDownBalance(account1.movements);
// Функция запускающая все фукнции, обновление информации на аккаунтах пользвателя
function updateUI (acc) {
  displayMovements(acc.movements);
  culcBalance(acc);
  culcDownBalance(acc.movements)
}

// Заход в аккаунт с логином и паролем
let currentAcc;
btnLogin.addEventListener("click", function(e){
  e.preventDefault()
  currentAcc = accounts.find(function(acc) {
    return acc.logIn === inputLoginUsername.value
  })
  if (currentAcc && currentAcc.pin === +inputLoginPin.value) {
    containerApp.style.opacity = 100;
    
    inputLoginUsername.value = inputLoginPin.value = "";

    updateUI(currentAcc)
  }
});

// Перевод денег с аккаунта на аккаунт
btnTransfer.addEventListener("click", function(e){
e.preventDefault()
const accTransferTo =  accounts.find(function(acc){
  return acc.logIn === inputTransferTo.value
});
const transferAmount = +inputTransferAmount.value;

if(transferAmount > 0 && currentAcc.balance >= transferAmount && accTransferTo !== currentAcc.logIn) {
  currentAcc.movements.push(-transferAmount)
  accTransferTo.movements.push(transferAmount)
  updateUI(currentAcc)
  inputTransferTo.value = inputTransferAmount.value = "";
}
})

// Удаление аккаунта
btnClose.addEventListener("click", function(e){
  e.preventDefault()
  if(inputCloseUsername.value === currentAcc.logIn && +inputClosePin.value === currentAcc.pin){
    const index = accounts.findIndex(acc => acc.logIn === currentAcc.logIn);
    accounts.splice(index, 1)
    inputCloseUsername.value = inputClosePin.value = "";
    containerApp.style.opacity = 0;
    
  
  }
})

// Внести деньги на счет

btnLoan.addEventListener("click", function(e){
  e.preventDefault()
  const amount = +inputLoanAmount.value;
  if(amount > 0){
    currentAcc.movements.push(amount);
    inputLoanAmount.value = "";
    updateUI(currentAcc)

  }
})

// Весь баланс банка
const tottalBalance = accounts
.map(val => val.movements)
.flat()
.reduce(((acc, val) => acc + val), 0)

console.log(tottalBalance)


// Фильтр истории счета
let sorted = false;
btnSort.addEventListener("click", function(e){
  e.preventDefault()
  displayMovements(currentAcc.movements, !sorted)
  sorted = !sorted
})

const str = "1234"
console.log(Array.from(str, function(val) {
  return "Это число " + val
}))
