'use strict';

// Замыкания - sum(a)(b)
/*
1. Что такое две скобки?

*/

function sum(a){
    console.log(a) // 2
    return function(b){
        return a + b;
        console.log(b)
    }
}

sum(2)(3);

// let temp = sum(2);
// let result1 = temp(3)

// сверху подробное описание двойных скобок

// let result2 = sum(2)(3);

// console.log(
//     result1,
//     result2
// )