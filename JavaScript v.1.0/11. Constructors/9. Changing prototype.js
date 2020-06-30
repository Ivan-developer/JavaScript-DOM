"use strict";

function User(name) {
  this.name = name;
}

User.prototype.test() = function () {
  console.log("111");
};

const misha = new User("Misha");

misha.test();