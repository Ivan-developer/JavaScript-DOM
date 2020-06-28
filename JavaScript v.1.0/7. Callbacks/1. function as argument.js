'use strict';

// Функция как аргумент

function print (x) {
    console.log(x)
}

function test (f){
    f(4) // очень важно - f это принт , 
    // в него передаем аргумент, который в 
    // print передаетсяs
}

test(print)