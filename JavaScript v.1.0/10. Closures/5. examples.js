"use strict";

// Поняли что такое замыкание давайте его проверим
/* Замыкание это когда
1. это когда внутрнения функция посльзуется 
переменной внешней и замыкает на себе, 
пример счетчик
*/


let x = 1;

if (true) {
  let x = 2;
  f();

  function f() {
    console.log(x);
  }
}

// function f() {
//     console.log(x)
// }

//______________________________________________

let x2 = 1;

function factory() {
  let x2 = 10;
  // переменная x хранится в замыкании для функции device

  const device = () => {
    x2++;
    console.log(x2);
  };

  return device;
}

const device1 = factory();
const device2 = factory();

device1();
device1();
device1();
device2();
