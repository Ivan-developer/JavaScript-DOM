'use strict';

// Замыкания - Фабрика запоминающих устройств
// Задача про строковый буфер

function makeBuffer(){
    let cache = '';
    return function buffer(str){
        if(arguments.length > 0){
            cache += str;
        }
        return cache
    }
}

let buffer1 = makeBuffer();

buffer1('Замыкание ');
buffer1('Использовать ');
buffer1('Нужно');

let result = buffer1();

console.log(result)