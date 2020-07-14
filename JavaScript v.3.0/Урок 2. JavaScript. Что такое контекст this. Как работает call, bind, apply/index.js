// Урок 2. JavaScript. Что такое контекст this. Как работает call, bind, apply

function hello() {
    console.log('hello', this) // глобальный объект window
}

const person = {
    name: 'Ivan',
    age: '18',
    sayHello: hello,
    sayHelloWinow: hello.bind(),
    loginfo: function(job, phone){
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`) // this - объект перед точкой
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

// У объекта lena нет функции loginfo, для этого надо закрепить контекст
// bind , call , apply
// const fnLenaInfoLog = person.loginfo.apply(lena, ['Frontend', '8-999-123-22-23']);
const fnLenaInfoLog = person.loginfo.bind(lena, 'Frontend', '8-999-123-22-23');
fnLenaInfoLog();

//=========================================

const array = [1,2,3,4,5];

// function multiBy(arr,n){
//     return arr.map(function(i){
//         return i * n;
//     })
// }

// console.log(multiBy(arr,5))

// в объект prototype записали новый метод, который можем юзать с другими масивами, не создавая заново новую фуекцию
Array.prototype.multBy = function(n){
        return this.map(function(i){
        return i * n;
    })
}

console.log(array.multBy(5))





















