'use strict';

// arguments - коллекция
// имеет length
// можно циклом for пройтись
// в массив методом: Array.from(arguments)
// или спред оператором = [...arguments]

// метод проверить массив ли это:
// arr.isArray(arguments) // false
// arr.isArray([]) // true

function f(x,y,z){
    console.log(x,y,z)
    console.log(arguments)
    const arr = Array.from(arguments)
    console.log(arr)
    const arr2 = [...arguments];
    console.log(arr2)
}

f(10,11,12,13,14,15)

// Важно , через сред все видим в 

function d(...args){
    console.log(args)
}

d(2,34,5,6,7,8)

// Деструктуризация 

const arr = [2,3,45]

const [x, ...args] = arr

console.log(args)

















