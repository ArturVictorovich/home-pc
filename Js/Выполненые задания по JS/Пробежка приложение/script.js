"use strict";



const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");


class Workout{
  date = new Date()
  // индивидуальный идентификатор
  id = (Date.now() + "").slice(-10)
  constructor(coords, distance, duration){
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
  _setDescription() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}
    `
  }
}

class Running extends Workout {
  type = "running"
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.culcPace();
    this._setDescription()
  }
  culcPace() {
    this.pace = this.duration / this.distance
    return this.pace
  }
 
}

class Cycling extends Workout {
  type = "cycling"
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.culcSpeed()
    this._setDescription()
  }
  culcSpeed() {
    this.speed = this.distance / (this.duration / 60)
    return this.speed
  }
}



class App{
  _workouts = []
  _map;
  _mapEve;
  constructor(){


    // запуск фукнции которая запускает работу карты
    this._getPosition();
    // обнуление окон инпутов после прожатия enter
    form.addEventListener("submit", this._newWorkout.bind(this));
    // Смена инпута с бега на велосипед
    inputType.addEventListener("change", this._tooglleField)
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this))
       // Полуение данных из LS
    this._getLocalStorage()

  }
  //заупускет карту API
  _getPosition(){if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
      // принмает функцию которая отображает карту 
      this._loadMap.bind(this),
      function(){alert("Вы не согласились на запрос гео данных")}
    )
    }}
    //запускает карту API 
  _loadMap(possition){
    const {latitude} = possition.coords
    const {longitude} = possition.coords
    const coords = [latitude, longitude]
    
      this._map = L.map('map').setView(coords, 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this._map);

      this._map.on("click", this._showForm.bind(this))
      this._workouts.forEach(work => {
        this._renderingMarke(work)
      })
    
  }
  //При клике на карту запускает окно
  _showForm(mapE){
    this._mapEve = mapE
    form.classList.remove("hidden")
    inputDistance.focus()
  }
  //Меняет форму инпутов
  _tooglleField(){
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden")
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden")
}

//Обнуляет поля инпутов при нажатии на enter и добавляет маркеры на карту
  _newWorkout(e){
    e.preventDefault()

    const validAllPositiv = (...inputs) =>
      inputs.every(inp => inp > 0)
    const  validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp))
//Данные из форм
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const {lat, lng} = this._mapEve.latlng
    let workout;
    


    if (type ==="running") {
      const cadence = +inputCadence.value

      if(
        !validInput(distance, duration, cadence) ||
        !validAllPositiv(distance, duration, cadence)
      ) {
        return alert("Необходио ввести целое число ") 
      }
        workout = new Running([lat, lng], distance, duration, cadence)
    }

    if (type ==="cycling") {
      const elevation = +inputElevation.value
      if(
        !validInput(distance, duration, elevation) ||
        !validAllPositiv(distance, duration)
      ) {
        return alert("Необходио ввести целое число ")
      }
      workout = new Cycling([lat, lng], distance, duration, elevation)
    }

    this._workouts.push(workout)
    console.log(this._workouts)
    //Рендер маркера тренеровки
    this._renderingMarke(workout)
    this._renderWorkout(workout)
    this._hideForm()

    this._setLoalStorage()
}
_renderingMarke(workout) {
  L.marker(workout.coords,{
      opacity: 1,
    }).addTo(this._map)
      .bindPopup(
    L.popup({
      className: "popupWindow",
      closeButton: true,
      autoClose: false,
      closeOnClick: false,
    })
  )
    .setPopupContent(`${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${workout.description} `)
    .openPopup() 
}
  // Очистить форму 

_hideForm() {
inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
  form.classList.add("hidden");
}
_renderWorkout(workout) {
  let html = 
  `
  <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">км</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">мин</span>
    </div>
  `
  if(workout.type === "running") {
    html += 
    `
    <div class="workout__details">
    <span class="workout__icon">⚡️</span>
    <span class="workout__value">${workout.pace.toFixed(1)}</span>
    <span class="workout__unit">мин/км</span>
  </div>
  <div class="workout__details">
    <span class="workout__icon">🦶🏼</span>
    <span class="workout__value">${workout.cadence}</span>
    <span class="workout__unit">шаг</span>
  </div>
</li>`;
    }

    if(workout.type === "cycling") {
      html += 
      `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">км/час</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevation}</span>
      <span class="workout__unit">м</span>
    </div>
    </li>
    
    
        `;
    
        }
    form.insertAdjacentHTML("afterend", html)
  }
  _moveToPopup(e) {
    const workoutEl = e.target.closest(".workout")
    if (!workoutEl) return

    const workout = this._workouts.find((work) => work.id === workoutEl.dataset.id)
    this._map.setView(
      workout.coords, 13, {
        animate: true,
        pan: {duration: 1},
      }
    )
  }
// Полуение данных из LS
  _getLocalStorage() {
  const data = JSON.parse(localStorage.getItem("workouts")) 

  if(!data) return

  this._workouts = data
  this._workouts.forEach(work => {
    this._renderWorkout(work)
  })
  }

  //Хранние информации о тренервоках в браузре
  _setLoalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this._workouts))
  }
  reset() {
    localStorage.removeItem("workouts")
  }
}


//Запуск приложения 
const app = new App()
//Запускает метод в конструкторе класса


