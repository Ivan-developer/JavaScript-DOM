'use strict';

// передадим объект во функцию


function test (user){

    user.age = 100;
    
    // user = 123;

    console.log(user);
};

// В функции поменяли сылку на age

const ivan = {
    name: 'Ivan',
    age: 18,
}

test(ivan)

console.log(ivan.age)

// Примитивы значение не меняют

function test2 (user2) {
    user2 = 100;
    console.log(user2)
};

const misha = 5

test2(misha)

console.log(misha)