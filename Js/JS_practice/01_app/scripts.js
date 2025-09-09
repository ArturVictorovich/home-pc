'use strict';
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов ты посмотрел?');
const movie1 = prompt('Какой фильм ты посмотрел последним?');
const rating1stMovie = +prompt('На сколько оценишь его от 1 до 10 ?');
const movie2 = prompt('Какой фильм ты посмотрел последним?');
const rating2ndMovie = +prompt('На сколько оценишь его от 1 до 10 ?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

personalMovieDB.movies[movie1] = rating1stMovie;
personalMovieDB.movies[movie2] = rating2ndMovie;
console.log(personalMovieDB);
