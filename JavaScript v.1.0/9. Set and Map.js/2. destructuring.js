'use strict';

const numbers = [10,11,12,13,14];

const [a, , ...items] = numbers;

const item = [1,2, ...numbers];

console.log(item);

console.log(a, items);

function f(...params){
    console.log(params)
}

f(...numbers)

// f(1,2,3,4,5,6,7,8)