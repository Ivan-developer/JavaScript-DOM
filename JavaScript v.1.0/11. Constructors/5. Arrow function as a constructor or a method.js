"use strict";

// у стрелочной функции нет свойства prototype
// => arrow func нельзя использовать как конструктор

function User(name) {
  this.name = name;
}

// в => func - this это глобальный объекут window
/*
не имеет своего this , а берет из внешней видимости
*/

User.prototype.sayHi = () => {
  console.log(this)  
  console.log(`Hello! I am ${this.name}`);
};

const user1 = new User("Misha");

user1.sayHi();
