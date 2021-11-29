"use strict";
const result = confirm('Are you here?');
console.log(result);
const answer = prompt('Type your age', '18');
console.log(answer);
console.log(typeof(answer));

const answer1 = +prompt('Type your age', '18');
console.log(answer1);
console.log(typeof(answer1));