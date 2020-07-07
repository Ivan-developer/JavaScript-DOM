// Урок 4. JavaScript. Асинхронность.Что такое Event Loop. JS SetTimeout 0

/*

js одно поточный

Асинхронность в js 
1. call back
2. event loop - пробегается по очереди и закидывает в call stack

асинхронные операции это 
1. метод setTimeout
2. scroll , click, работа с сервером

все это асинхронные операции

latentflip event loop

Loupe - Philip Roberts

*/ 

console.log('start') // закидует в stack и выполняет
console.log('start') // закидует в stack и выполняет

function timeOut(){
    console.log('time 5 sec')
}

window.setTimeout( timeOut
, 5000)

window.setTimeout(function(){ // // закидует в stack и попадает в очередь
    console.log('Inside timeout, after 2000 seconds')
},3000)

console.log('End') // закидует в stack и выполняет