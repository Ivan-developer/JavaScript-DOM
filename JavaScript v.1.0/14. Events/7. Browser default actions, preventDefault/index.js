const h1 = document.querySelector('h1');

const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();
// })


h1.addEventListener('mousedown', (event) => {
    event.preventDefault();
})

link.onclick = () => {
    return false
}