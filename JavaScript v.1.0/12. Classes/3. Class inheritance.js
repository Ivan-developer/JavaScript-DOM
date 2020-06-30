'use strict';

class User {
    role = 'user';
    age = 0;

    constructor(name){
        this.name = name;
    }

    printInfo() {
        console.log(`${this.name} is ${this.age}`)
    }
}

class Admin extends User {
    role = 'admin';

    auth() {
        console.log('admin user')
    }
}

const misha = new User ('Misha', 'Gogo')
const petya = new Admin ('Petya')

console.log(misha)
console.log(petya)