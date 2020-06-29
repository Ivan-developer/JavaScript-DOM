"use strict";

// LE
// let , const , f - хранится в block
// блочная обдасть видимости
/*
1. block - var игнор блоки и попадает в global
2. script - let, const - записывается либо в script / block
3. global
4. local - если переменные в функции , область видимости
a1
a2
a3
a4
this: underfined
*/

if (true) {
  let a1 = "let";
  const a2 = "const";
  var a3 = "var";
  function a4() {}

  console.log(a1);
  console.log(a2);
  console.log(a3);
  console.log(a4);
}

let a1 = "let";
const a2 = "const";
var a3 = "var";
function a4() {}

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
