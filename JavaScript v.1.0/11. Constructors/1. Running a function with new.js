'use strict';

// создавать объекты при помощи функции
// функция конструктор

function User (name){
    this.name = name;
    this.role = 'user';
    this.rating = 0;
}

const misha = new User('Misha');
const petya = new User('Petya');

console.log(misha);
console.log(petya);