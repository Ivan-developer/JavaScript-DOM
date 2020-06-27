'use strict';

// Объект в строку

// из строку в объект!!

// создаем копию объекта 

const user1 = {
    name: 'Ivan',
    lastName: 'Ivanov',
    age: 18,
}

// Объект в строку

const user6 = JSON.stringify(user1);
console.log(user6);

// из строку в объект!!

const user7 = JSON.parse(user6)
console.log(user7)

const user4 = {}

for(let key in user1){
    user4[key] = user1[key]
}

console.log(user4)

const user = user1;

const {...user2} = user1;

const user5 = {...user1};
console.log(user5)

// способ скопировать объект
const user3 = Object.assign({}, user1, { x: 1, y:2})

console.log(
    user === user1,
    user2,
)

console.log(user2)

console.log(user3)