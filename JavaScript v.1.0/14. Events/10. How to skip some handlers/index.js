
const section = document.querySelector('section');

const buttom = document.querySelector('button');

// let isClickHandled = false;



buttom.addEventListener('click', (event) => {
    event.isAlreadyHandler = true;
    console.log('BUTTON')
    // isClickHandled = true;
})

section.addEventListener('click', (event) => {
    // if (isClickHandled) return;
    if (event.isAlreadyHandler) return;
     console.log('SECTION')
})

document.body.addEventListener('click', (event) => {
    console.log('BODY')
    // isClickHandled = false;
})