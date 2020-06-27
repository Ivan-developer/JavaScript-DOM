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
Object.setPrototypeOf(child, null); // больше не наследует

console.log(
    child.lastName,
    child.hasOwnProperty('lastName'),
    // узнать от кого наследствуется
    Object.getPrototypeOf(child)
)