"use strict";

const answers = [];
answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your surname?', '');
answers[2] = prompt('How old are you?', '18');

const result = confirm
(`Ваc зовут ${answers[0]} ${answers[1]} и \
  вам ${answers[2]} лет! Верно?`);
alert(result);

alert(`Str\ning1 ' +\
 'String2`); // символ "\" позволяет игнорировать перенос сотроки в коде