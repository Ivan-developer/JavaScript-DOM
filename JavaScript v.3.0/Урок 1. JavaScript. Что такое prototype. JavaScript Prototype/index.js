// Урок 1. JavaScript. Что такое prototype. JavaScript Prototype

const person = {
    name: 'Ivan',
    age: 18,
    greet: function(){
        console.log('Greet!')
    }
}

person.greet()
console.log(person)

const person2 = new Object(
    {
    name: 'Ivan',
    age: 18,
    greet: function(){
        console.log('Greet!'),
    }
    )

Object.prototype.sayHello = function(){
    console.log('Hello')
}

person2.sayHello()

const lena = Object.create(person2)

const str = new String('I am string');