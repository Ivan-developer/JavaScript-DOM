'use strict';
// все что с static относится к классу,
// все что без то к новым создаваемым объектам
class User {
    // статические свойства
    static count = 0;

    // статический метод 

    static increase(){
        this.count++;
    }

    role = 'user';
    age = 0;

    constructor(name){
        this.name = name;
        User.count++;
    }

    printInfo() {
        console.log(`${this.name} is ${this.age}`)
    }
}

const misha = new User ('Misha')

console.log(misha)