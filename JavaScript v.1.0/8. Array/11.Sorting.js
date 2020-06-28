'use strict';

// мутирует
// Если сделать копию , но первый не будет мутировать 

// const users = [...];

const numbers = [5,3,10,4,2];

const callback = (a,b) => {
    return a - b;
}

const result = [...numbers].sort(callback)

console.log(result);
console.log(numbers)