'use strict';

// Откуда метод у строки?
//

const word = 'abcdefg';

const result = word.slice(0, 3);


// над word получается объект обвертка
const result = new String(word).slice(0, 3);

new String() // это объект String{'abcdefg'}, у него есть длина и есть __proto__

console.log(result)

// так же и для number 

const number = 5;

const result2 = number.toFixed(3);

// так же создается объект обвертка

const result2 = new Number(number).toFixed(4)

console.log(result2)