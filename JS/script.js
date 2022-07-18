"use strict";
/*
const hamburger = true,
    fries = true;

if (hamburger && fries) {
    console.log('Я сыт!');
}

console.log(hamburger && fries);
*/

/*
const hamburger = 5;
const fries = 1;

// см таблицу приоритета операторов, === выполняется раньше &&
if ( humburger === 3 && fries ) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
}
*/

const hamburger = 5,
    fries = 1,
    cola = 5;
// в консоли получаем '0', т.к. оператор && возращает числовое значение
// последней переменной, на которой он остановил свою работу
console.log(hamburger && cola && fries);

//еще варианты:
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(1 && 'fjkjdflsdjl');


if (hamburger === 3 && cola === 1 && fries) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим!');
}