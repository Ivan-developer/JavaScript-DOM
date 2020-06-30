'use strict';

class User {
    role = 'user';

    constructor(name){
        this.name = name;
    }
}

class Admin extends User {
    role = 'admin';
}

const misha = new User ('Misha')
console.log('Misha is User', misha instanceof User)
console.log('Misha is Admin', misha instanceof Admin)

const petya = new Admin ('Petya')
console.log('Petya is User', petya instanceof User)
console.log('Petya is Admin', petya instanceof Admin)