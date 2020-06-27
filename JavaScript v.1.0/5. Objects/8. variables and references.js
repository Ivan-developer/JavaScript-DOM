'use strict';

// переменная это контейнер для значений

const name = 'Ivan';
let age = 35;

age = age + 1;

console.log(age)

// Значения передаются по сылке

const user = {
    name: 'Ivan',
    age: 18,
}

const obj = user;

user.name = 'Tom';

obj.name = 'Max';

console.log(obj)

// Копирование значений 

