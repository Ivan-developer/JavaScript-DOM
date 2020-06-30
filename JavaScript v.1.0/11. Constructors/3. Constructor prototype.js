'use strict';

// Классам называют шаблон по которому создаются объекты

User.prototype = {
    sayHi() {
        console.log(`Hello! I am ${this.name}`)
    }
}

function User (name){
    this.name = name;

    this.role = 'user';
    this.rating = 0;
}



const user1 = new User('Misha');
const user2 = new User('Petya');

user1.sayHi();

