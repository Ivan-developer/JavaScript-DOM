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
    age = 2;

    // Расширили конструктор
    constructor(name, surname){
        super(name);
        this.surname = surname;
    }

    auth() {
        console.log('admin user')
    }

    printInfo(){
        super.printInfo();
        this.auth();
    }
}

const misha = new User ('Misha')
const petya = new Admin ('Petya', 'Smith')

petya.printInfo()

console.log(misha)
console.log(petya)