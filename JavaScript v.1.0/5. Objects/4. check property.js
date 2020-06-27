'use strict'

// проверим есть ли свойства в объекте
// object .hasOwnProperty('')

const user = {
    age : 35,
}

console.log(
    user.age,
    Boolean(user.age),
    user.age !== undefined,
    'age' in user,
    user.hasOwnProperty('age')
)