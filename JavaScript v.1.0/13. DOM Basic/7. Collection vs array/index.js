'use strict';
/*
Collection vs array

Коллекция и массив

*/

const list = document.querySelectorAll('ul')
console.log(list) // Collection


// Коллекция не массив!! надо из нее сделать массив
// двумя способами [...arrr] , Array.from()
const items = document.querySelectorAll('li');
const text = [...items].map(item => item.innerText);
console.log(text)