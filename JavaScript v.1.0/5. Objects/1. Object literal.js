'use strict';

const age = 35;

const user = {
   'first Name' : 'Ivan',
   "last Lame" : 'Ivanov',
   fullName : 'Ivan Ivanov',
   ['is' + 'Married'] : true,
   // age : age, // снизу короткая запись
   age,
}

// создали пустой объект 
const user2 = {};
const user3 = new Object();

console.log(user)