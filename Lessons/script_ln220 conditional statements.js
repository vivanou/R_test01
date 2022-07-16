'use strict';

//const num = 42;
const num = +prompt('Ваш ответ ?', '42');
const a = false;

if (a) { // выполняется ветка else, если переменная a = false
    console.log('a = true');
} else {
    console.log('a = false');
    console.log(a);
}
// использование if-else
if (num < 42) {
    console.log('Too less!');
} else if (num > 42) {
    console.log('Too much!');
} else {
    console.log('Ok!');
}

// использование тернарного оператора
(num == 42) ? console.log('Ok!') : console.log('Error!');

// использование тернарного оператора, еще вариант
console.log((num == 42) ? 'Ok!' : 'Error!');

// использование тернарного оператора, множественные условия
console.log((num < 42) ? 'Too less!' : (num > 42) ? 'Too much!' : 'Ok!');

// switch - только строгое сравнение и дефолтное условие!
switch (num) {
    case 50:
        console.log('В точку!');
        break;
    case 42:
        console.log('Неверно, но выбор уважаю');
        break;
    default:
        console.log('Мимо!')
}
