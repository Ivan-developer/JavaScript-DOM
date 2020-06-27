'use strict'

// Методы в прототипах
// Наследуются методы


const father = {
    name: 'Ivan',
    lastName: 'Ivanov',

    sayHi(){
        console.log(`hello: ${this.name}`)
    }
}

const child = {
    name: 'Child',
    __proto__: father,
}

father.sayHi();

child.sayHi()