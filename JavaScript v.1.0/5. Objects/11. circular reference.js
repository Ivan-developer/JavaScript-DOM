'use strict';

// Поженили

const petya = {
    name : 'Petya',
    lastName: 'Smith',
    wife: null,
}

const tanya = {
    name: 'Tanya',
    lastName: 'Black',
    husband: null,
}

petya.wife = tanya;
petya.wife.lastName = petya.lastName;

console.log(tanya.lastName)

