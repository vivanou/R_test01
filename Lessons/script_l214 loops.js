'use strict';

let num = 50;
//цикл while
while (num < 55) {
    console.log(num);
    num++;
}

num = 50;
// цикл do-while
do {
    console.log(num);
    num++;
}
while (num < 55);

num = 50;
// цикл for

for (let i = 1; i < 8; i++ ) {
    console.log(num);
    num++;
}

num = 50;
// цикл for c break - прервать по условию
for (let i = 1; i < 8; i++ ) {
    if (i === 4) {
        break;
    }
    console.log(num);
    num++;
}

num = 50;
// цикл for c continue - пропустить шаг по условию,
// но не прерывать цикл
for (let i = 1; i < 8; i++ ) {
    if (i === 4) {
        continue;
    }
    console.log(i); // как меняется i
    console.log(num); // как меняется num
    num++;
}