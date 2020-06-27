'use strict';

const user = {
    firstName : 'Ivan',
    lastName : 'Ivanov',
    age: 35,
}

// читаем свойства, в ['props'] - только в '';

console.log(
    user['firstName'],
    user['lastName'],
    user.age
)