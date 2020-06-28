'use strict';

const numbers = [0,1,2,3,4,5]; 
// не меняют массив 

const result2 = numbers.join(' '); // из массива в строку!!
const result3 = numbers.slice(2,5); // можно им копию сделать или отрезать от 2 и до 5
const result4 = numbers.concat(6,7); // добавить, если пустой то сделаем копию
const result5 = numbers.concat({ x: 1}); // добавить объект

console.log(
    result2,
    result3,
    result4,
    result5
)