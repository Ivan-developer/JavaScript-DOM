'use strict';

// Поиск в массиве

const numbers = [10,11,12,13,14,22,4];

const callback = (item, index, arr) => {
    console.log(item, index, arr)
    return item % 3 === 0;
}

const result1 = numbers.includes(12) // проверяет есть ли такой элемент в массиве, true - false
const result2 = numbers.indexOf(12) // поиск индекса
const result3 = numbers.lastIndexOf(12) // последний индекс
const result4 = numbers.findIndex(callback) //
const result5 = numbers.find(callback) // 

console.log(
    result1,
    result2,
    result3,
    result4,
    result5,
)