"use strict";

// function User(name) {
//   this.name = name;
// }

// User.prototype.age = 0;

// User.prototype.celebrateBirthday = function () {
//   this.age++;
//   // this.age = this.age + 1
//   console.log(`${this.name} is now ${this.age}`);
// };

// const misha = new User("Misha");
// const petya = new User("Petya");

// misha.celebrateBirthday();
// misha.celebrateBirthday();
// misha.celebrateBirthday();

// petya.celebrateBirthday();

//_______________________ ТЕПЕРЬ СДЕЛАЕМ С ДРУЗЬЯМИ

function User(name) {
    this.name = name;
  }
  
  User.prototype.friends = []; // frineds
  
  User.prototype.addFriend = function (friend) {
    this.friends.push(friend);

    console.log(`${this.name} is now ${this.friends}`);
  };
  
  const misha = new User("Misha");
  const petya = new User("Petya");
  
  misha.addFriend(1);
  misha.addFriend(2);
  misha.addFriend(3);
  
  petya.addFriend(4);
