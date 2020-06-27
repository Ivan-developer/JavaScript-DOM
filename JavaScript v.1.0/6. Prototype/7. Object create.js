'use strict'

// Object.create 
// Использовался когда небыло:
// методов:
// __proto__ / Object.setPrototypeOf();


const father = {
    name: 'Ivan',
    lastName: 'Ivanov',

    sayHi(){
        console.log(`hello: ${this.name}`)
    }
}

const child = Object.create(father);
child.name = 'Child';

father.sayHi();

child.sayHi()