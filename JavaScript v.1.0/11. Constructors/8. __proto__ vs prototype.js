'use strict';

// для объекта свойства prototype не существует
// __proto__ есть у объекта и у функции
// Таким образом прото это специальное свойство которое хранит сылку на объект прототипа
// prototype есть у функции конструктор и классов

function User(name){
    this.name = name;
}

const misha = new User('Misha');

console.log(
    misha.__proto__ === User.prototype, // true
)

console.log(
    misha.prototype
)

console.log(
    User.prototype
)

