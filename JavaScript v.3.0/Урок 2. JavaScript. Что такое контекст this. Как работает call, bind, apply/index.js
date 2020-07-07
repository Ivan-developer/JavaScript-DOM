// Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply

function hello() {
    console.log('hello', this) // window глобальный объект
}

const person = {
    name: 'Ivan',
    age: '18',
    sayHello: hello,
    sayHelloWinow: hello.bind(),
    loginfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23,
}
// bind , call , apply
const fnLenaInfoLog = person.loginfo.apply(lena, ['Frontend', '8-999-123-22-23']);
// fnLenaInfoLog()

//=========================================

const array = [1,2,3,4,5];

// function multiBy(arr,n){
//     return arr.map(function(i){
//         return i * n;
//     })
// }

Array.prototype.multBy = function(n){
        return this.map(function(i){
        return i * n;
    })
}

console.log(array.multBy(5))

// console.log(multiBy(arr,5))





















