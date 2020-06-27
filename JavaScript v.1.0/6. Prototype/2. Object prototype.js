'use strict'

// Наследование объекта

const father = {
    name: 'Ivan',
    lastName: 'Ivanov'
}

const child = {
    name: 'Child',
}

// Object.setPrototypeOf(child, father);
Object.setPrototypeOf(child, null);

console.log(
    // Object.getPrototypeOf() === Object.getPrototypeOf(child)
    Object.getPrototypeOf(child) 
)