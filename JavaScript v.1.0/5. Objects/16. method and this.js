"use strict";

// ВНИМАНИЕ НОВОЕ: 
// Если в объекте функция стрелка => то this работает иначе

const misha3 = {
    firstName: "Misha",
    lastName: "Hryko",
    print: () => {
      console.log(`${this.firstName} ${this.lastName}`);
    },
  };
  misha3.print();


const misha = {
  firstName: "Misha",
  lastName: "Hryko",
  print: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
misha.print();

// Сокращаем

const misha2 = {
  firstName: "Misha",
  lastName: "Hryko",
  print() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

misha2.print();

// __proto__ наследование

const user2 = {
    age: 18,
    __proto__ : misha2,
}

console.log(user2)

// _____________________________________________________

// методы объекта и контекст

// function printFullName(user){
//     console.log(
//         `${user.firstName} ${user.lastName}`,
//     );
// };

// const misha = {
//     firstName: 'Misha',
//     lastName: 'Hryko',
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smoth',
// };

// printFullName(misha);
// printFullName(john);

// ___________________________________________________________

// function printFullName(user){
//     console.log(
//         `${user.firstName} ${user.lastName}`,
//     );
// };

// const misha = {
//     firstName: 'Misha',
//     lastName: 'Hryko',
//     print: printFullName,
// }

// misha.print(misha)

// const john = {
//     firstName: 'John',
//     lastName: 'Smoth',
//     print: printFullName,
// };
// john.print(john)

// printFullName(misha);
// printFullName(john);

// _____________________________________________________________

// function printFullName(user){
//     console.log(
//         `${this.firstName} ${this.lastName}`,
//     );
// };

// const misha = {
//     firstName: 'Misha',
//     lastName: 'Hryko',
//     print: printFullName,
// }

// const john = {
//     firstName: 'John',
//     lastName: 'Smoth',
//     print: printFullName,
// };

// printFullName(misha);
// printFullName(john);
