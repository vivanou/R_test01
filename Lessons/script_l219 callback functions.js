'use strict';
function first() {
    // do something
    setTimeout(function() {
        console.log(1 + ' (setTimeout())');
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function LearnJS(lang, callback) {
    console.log (`Я учу: ${lang}`);
    callback();
}

LearnJS('JavaScript', function() { // вызов c анонимной функцией как параметром
    console.log('Я прошел этот урок!');
});

/* то же самое, но вызов "осознанной" функции*/
function done() {
    console.log('Я прошел этот урок!');
}
LearnJS('JavaScript', done); //имя функции передаем как параметр


