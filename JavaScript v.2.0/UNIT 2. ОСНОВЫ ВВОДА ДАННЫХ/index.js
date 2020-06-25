// let a = 6;
// let b = 'Hello';

// console.log(a);

// let inputIn = document.querySelector('.input-in'); // input
// let button = document.querySelector('button'); // button
// let div = document.querySelector('.out1');

// button.onclick = function () {
//     let b = +inputIn.value; 
//     div.innerHTML = b;
//     inputIn.value = ''; 
// }



const input = document.querySelector('.input');
const button = document.querySelector('.button');
const out = document.querySelector('.out');

const toDo = () => {
    let b = +input.value;
    out.innerHTML = `<h1> ${b} </h1>`
}

button.addEventListener('click', toDo)

























