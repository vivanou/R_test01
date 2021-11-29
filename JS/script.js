"use strict";

console.log(4 + "5");
console.log(4 - +"5"); // унарный +, делает число из строки

// инкременты
let incr = 10,
    decr = 10;
// incr++
// decr--
console.log(++incr); // сначала увеличиваем, потом используем
console.log(decr--); // сначала используем, потом уменьшаем

console.log(5%2); // остаток от деления

console.log((2 + 2) * 2 == '8'); // скобки, == сравнение по значению а не типу данных
console.log(2 + 2 * 2 === +'6'); // * выполняется раньше +, сравнение по типу данных и
                                 // значению, + перед началом строки превращает ее в число

console.log((2 + 2) * 2 != '8'); // то же самое, но "не равно"
console.log(2 + 2 * 2 !== +'6');

const ifChecked = true;
const ifClosed = true;

console.log(ifChecked || !ifClosed);
