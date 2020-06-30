'use strict';

class User {
    // свойства
    role = 'user';
    age = 0;

    // вычесляемые свойства
    get fullName() {
        return `${this.name} ${this.surname}`
    }

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.number = 0;
    }
    printInfo() {
        console.log(`${this.name} is ${this.age}`)
    }
}

const misha = new User ('Misha', 'Gogo')

console.log(misha)