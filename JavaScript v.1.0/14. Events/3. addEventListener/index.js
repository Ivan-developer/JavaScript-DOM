const button = document.querySelector('button');

// button.onclick = () => {
//     console.log(1);
// }

// button.onclick = () => {
//     console.log(2);
// }

button.addEventListener('click', ()=>{
    console.log(1)
})

const toDo = () => {
    console.log(4)
}

button.addEventListener('click', toDo)

button.removeEventListener('click', toDo)