'use strict';

// По умолчанию у любого конструктора есть свойство prototype

User.prototype.sayHi = function() {
        console.log(`Hello! I am ${this.name}`)
    }

function User (name){
    this.name = name;
}



const user1 = new User('Misha');

user1.sayHi()