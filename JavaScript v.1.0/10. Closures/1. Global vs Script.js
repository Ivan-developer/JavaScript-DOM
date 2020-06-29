'use strict';
/*
Есть два места где хранятся глобальные переменные 
1. Global {
    alert: 
    window:
    window.a1
}

2. Script - пер объявленные через let , const
a1: 'a1'
a2: f_a2

*/
var a1 = 'a1';

console.log(window.a1)

function a2(){
    console.log('a2')
}

console.log(a1);
console.log(a2)