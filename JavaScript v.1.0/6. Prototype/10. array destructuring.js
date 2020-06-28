'use strict';

// деструктуризация
// массив - функция! 

const numbers = [10,11,12,13,14];

const [a, , ...item] = numbers;

// клон

const items = [...numbers];
console.log(items)

console.log(a, item);

// деструктуризация в функции

function f(...params){
    console.log(params);
}

f(...numbers); // очень важно

// f(20,21,22,23,24,25)

