'use strict';

// все ключи === string

const data = {
    '3' : 100,
    "3" : 200,
    3 : 300,
    [1 + 2] : 400,
}

console.log(
    data['3'],
    data["3"],
    data[3],
    data[1 + 2],
    data[`3`],
)

const user = {
    age : 18,
}

console.log(user.age)

