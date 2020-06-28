'use strict';

// метод принимает первый параметром callback
// вторым стратовое значение 

const numbers = [10,12,13,14,15];

const callback = (...args) => {
    console.log(args)
}

const result = numbers.reduce(callback, 'Initial value');

console.log(result)

// ____________________________________________________________

const numbers2 = [10,12,13,14,15];

const callback2 = (sum, item) => {
    // принимает два аргумента первый - акамулятор , второе число , 0 - начальньное значение
    return sum + item;
}

const result2 = numbers2.reduce(callback2, 0);

console.log(result2)

// __________________________________________________________

const users = [
    { id: 1, value: 111},
    { id: 2, value: 222},
    { id: 3, value: 333},
    { id: 4, value: 444},
    { id: 5, value: 555},    
]

const userMap = {};

for (const user of users){
    userMap[user.id] = user;
}

const user = userMap[1];
const user2 = userMap[2];
console.log(user, user2)

const user1 = users.find(user => user.id === 2);
console.log(user1)

9.6 мин
