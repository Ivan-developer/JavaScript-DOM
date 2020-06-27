"use strict";

// Строгое сравнение
// == приводит типы даных
// === (строгое) - не приводит

let x = 5;
let y = "5";

console.log(x === y);

const user = { name: "Ivan" };
const coach = user;
const father = user;

console.log(coach === father);

// false потому что два разных объекта

const user1 = {};
const user2 = {};

console.log(user1 === user2)
