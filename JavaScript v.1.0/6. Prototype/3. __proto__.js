'use strict'

// Наследование объекта

const father = {
    name: 'Ivan',
    lastName: 'Ivanov'
}

const child = {
    name: 'Child',
}


Object.setPrototypeOf(child, father);

console.log(
    child.__proto__ === Object.getPrototypeOf(child)
)