// Урок 1. JavaScript. Что такое prototype. JavaScript Prototype
// __proto__ сылка на Prototype объекта
// Prototype это объект, который присутствует у объектов и он вызывается по цепочки сверху вниз
// в JS всё является объектом
// __proto__ это объект
// Prototype это объект, с помощью которого мы расширяем свойства объектов или классов и с помощью его мы може устанавливать наследование

const person = {
    name: 'Ivan',
    age: 18,
    greet: function(){
        console.log('Greet!')
    }
}

person.greet()
console.log(person)

const person2 = new Object({
    name: 'Ivan',
    age: 18,
    greet: function(){
        console.log('Greet!')
    }
});

Object.prototype.sayHello = function(){
    console.log('Hello')
}

person2.sayHello()

const lena = Object.create(person2);
lena.name = 'Elena';
console.log(lena.name);

// Пример у строки есть свои методы
const str1 = 'I am string';
console.log(str1.length);
const str2 = new String('I am string');