/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms = 0;

do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // если нажать Cancel, то +prompt выдает "0" типа number 
            // ответ сразу в число +prompt, иначе цикл не работает
    console.log('numberOfFilms is ' + typeof(numberOfFilms)); // логи)
    console.log('numberOfFilms = ' + numberOfFilms);
}
while (isNaN(numberOfFilms) || (numberOfFilms <= 0)); //повтор если ответ не является положительным числом

console.log('numberOfFilms is ' + typeof(numberOfFilms));
console.log('numberOfFilms = ' + numberOfFilms);

const personalMovieDB = {  // наша база данных
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log('personalMovieDB[\'count\'] = ' + personalMovieDB['count']);

let lastFilmName = '',
    lastFilmRate = 0;

for (let i = 1; i < (numberOfFilms + 1); i++) {
    do {
        lastFilmName = String(prompt('Один из последних просмотренных фильмов?', '')); //если нажать Cancel, то prompt выдает "null" типа object 
        
        console.log('lastFilmName is ' + typeof(lastFilmName)); // логи
        console.log('lastFilmName = ' + lastFilmName);
        
    }
    while (lastFilmName === '' || lastFilmName === 'null' ||
            lastFilmName.length > 50);

    lastFilmRate = +prompt('На сколько оцените его?', '10');
    personalMovieDB.movies[lastFilmName] = lastFilmRate;
    
    console.log(personalMovieDB.movies); // логи
    console.log(i);
}

// задание 4 , другие варианты цикла

let lastFilmName = '',
    lastFilmRate = 0;


    do {
        lastFilmName = String(prompt('Один из последних просмотренных фильмов?', '')); //если нажать Cancel, то prompt выдает "null" типа object 
       
    }
    while (lastFilmName === '' || lastFilmName === 'null' ||
            lastFilmName.length > 50);

    lastFilmRate = +prompt('На сколько оцените его?', '10');
    personalMovieDB.movies[lastFilmName] = lastFilmRate;
    
    console.log(personalMovieDB.movies); // логи
    console.log(i);


//задание 3
// if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов ;-)');
// } else if (personalMovieDB.count <= 30) {
//     alert('Вы классический зритель ;-)');
// } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман ;-)');
// }

// задание 3, вар. 2, проверка на отрицательные значения,
// хотя такие значения невозможны исходя из логики работы кода


// if (personalMovieDB.count >= 0) {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов ;-)');
//     } else if (personalMovieDB.count <= 30) {
//         alert('Вы классический зритель ;-)');
//     } else if (personalMovieDB.count > 30) {
//         alert('Вы киноман ;-)');
//     }  
// } else {
//     alert('Ошибка!');
// }


// задание 3 вариант 2.1, аккуратней написано

// if (personalMovieDB.count < 0) {
//     alert('Ошибка!');
// } else if (personalMovieDB.count < 10) {
//     alert('Просмотрено довольно мало фильмов ;-)');
// } else if (personalMovieDB.count > 30) {
//     alert('Вы киноман ;-)');
// }  

// задание 3 вариант 2.1
// тринарный оператор, и не один)))
let message = 
    (personalMovieDB.count < 0) ? 'Ошибка!' :
    (personalMovieDB.count < 10) ? 'Просмотрено довольно мало фильмов ;-)' : 
    (personalMovieDB.count <= 30) ? 'Вы классический зритель ;-)' :
    'Вы киноман ;-)';
alert(message);

