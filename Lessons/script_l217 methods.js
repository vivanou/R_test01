'use strict';

const str = 'test';
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str);

//поиск подстроки
const str1 = 'Some fruit';
console.log(str1.indexOf('fruit'));//выдает позицию, с котрой начинается подстврока,
                                    // первая позиция - 0
console.log(str1.indexOf('q')); //выдает -1 если такой подстроки нет
console.log(str1.length);
console.log(str1.slice(str1.indexOf('fruit'), str1.length - 1));
console.log(str1.slice(str1.indexOf('fruit'))); /* если воторого аргумента нет,
 то вырезает до конца строки */
console.log(str1.slice(5, -1)); // "-1" - считает от конца строки
console.log(str1.substring(5));
console.log(str1.substr(5, 4));

//математика

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test)); //строка в целое число
console.log(parseFloat(test));

