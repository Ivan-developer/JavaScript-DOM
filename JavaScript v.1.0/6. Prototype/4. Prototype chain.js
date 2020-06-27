'use strict'

// Цепочка наследования

const grandFather = {
    name: 'GrandFather',
    history: '3',
}

const father = {
    name: 'Ivan',
    lastName: 'Ivanov'
}

Object.setPrototypeOf(father, grandFather);

const child = {
    name: 'Child',
}


Object.setPrototypeOf(child, father);

console.log(
    child.history)
)