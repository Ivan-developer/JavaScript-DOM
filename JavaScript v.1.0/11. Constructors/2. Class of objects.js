'use strict';

// Классам называют шаблон по которому создаются объекты

function User (name){
    this.name = name;

    this.role = 'user';
    this.rating = 0;
}

function Dog (name) {
    this.name = name;

    this.legscount = 4;
    this.canBark = true;
}

const misha = new User('Misha');
const petya = new User('Petya');

console.log(misha);
console.log(petya);