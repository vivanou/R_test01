"use strict";

console.log(4 + "5");
console.log(4 + +"5"); // унарный +, делает число из строки

// инкременты
let incr = 10,
    decr = 10;
// incr++
// decr--
console.log(++incr); // сначала увеличиваем, потом используем
console.log(decr--); // сначала используем, потом уменьшаем
