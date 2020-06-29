"use strict";
/*
1. var до объявлять можно let, const нельзя
но var будет underfined
2. var - до объявлять можно, let / const нельзя
a1 = 'var';

var a1;

a2 = 'let'

let a2;

*/

a1 = "var";

var a1;

let a2 = "let";

console.log(a1);
console.log(a2);

// 2. let - const имеет блочную видимость
// var не имеет - ее можно снаруже вызывать

if (true) {
  var b1 = "var";
  let b2 = "let";
}

console.log(b1);
console.log(b2);

// в цикле for - var всплывет

function f() {
  var c1 = 'var';
  let c2 = 'let';

  console.log(c1);
  console.log(c2);
}

f()
