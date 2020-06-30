'use strict';

function User() {
    const user1 = new User();

    console.log(
        user1.__proto__ === User.prototype
    )
}

// Object

const obg1 = {};
const obj2 = new Object()

console.log(
    obj2.__proto__ === Object.prototype
)

// Array

const arr1 = [];
const arr2 = new Array()

console.log(
    arr2.__proto__ === Object.prototype
)

// Function

const f1 = function() {};
const f2 = new Function()

console.log(
    f2.__proto__ === Function.prototype
)