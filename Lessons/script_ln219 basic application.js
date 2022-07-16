/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
// задание 1
let numberOfFilms = 0;

//numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log('numberOfFilms = ' + numberOfFilms);

// задание 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
console.log('personalMovieDB[\'count\'] = ' + personalMovieDB['count']);
// задание 3
let lastFilmName1 = prompt('Один из последних просмотренных фильмов?', '');
let lastFilmRate1 = prompt('На сколько оцените его?', '10');
let lastFilmName2 = prompt('Один из последних просмотренных фильмов?', '');
let lastFilmRate2 = prompt('На сколько оцените его?', '10');

// посмоnрим, задан ли объект personalMovieDB.movies ?
console.log(personalMovieDB.movies);
//положим в него ответы, задав имена свойств из переменных, содержащих ответы пользователя
// и выведем их в консоль
personalMovieDB.movies[lastFilmName1] = lastFilmRate1;
personalMovieDB.movies[lastFilmName2] = lastFilmRate2;
console.log(personalMovieDB.movies);
