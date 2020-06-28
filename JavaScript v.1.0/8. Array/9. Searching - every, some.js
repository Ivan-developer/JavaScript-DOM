'use strict';

// 

const numbers = [10,11,12,13,14,22,4];

const callback = (item, index, arr) => {
    return item % 3 === 0;
}

const result1 = numbers.some(callback) // 
const result2 = numbers.every(callback) // 

console.log(
    result1,
    result2,
)