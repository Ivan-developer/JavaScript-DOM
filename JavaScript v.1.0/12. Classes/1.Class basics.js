"use strict";

function User(name) {
  this.name = name;
  this.age = 0;
}

User.prototype.celebrateBirthday = function () {
  this.age++;
  this.printInfo();
};

User.prototype.printInfo = function () {
  console.log(`${this.name} is now ${this.age}`);
};

const misha = new User("Misha");

misha.celebrateBirthday();
misha.celebrateBirthday();
misha.celebrateBirthday();

// Class это шаблон по которому создаются объекты

class Human {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }
  celebrateBirthday() {
    this.age++;
    this.printInfo();
  }
  printInfo() {
    console.log(`${this.name} is now ${this.age}`);
  }
}

const misha2 = new Human("Misha");

misha2.celebrateBirthday();
misha2.celebrateBirthday();
misha2.celebrateBirthday();