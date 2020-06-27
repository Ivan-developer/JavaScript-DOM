'use strict'

// Prototype is used only for reading
// Читать можно, перезаписывать наследника нельзя

const father = {
    name: 'Ivan',
    lastName: 'Ivanov'
}

const child = {
    name: 'Child',
    __proto__: father,
}

child.lastName = 'Black';


console.log(
    child.lastName
)