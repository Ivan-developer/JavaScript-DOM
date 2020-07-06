// bubbling всплытие
// что бы остановить 

const button = document.querySelector('button');

document.body.addEventListener('click', (event) => {
    console.log(event.target)
    console.log(event.currentTarget)


    console.log('Body click')
})

button.addEventListener('click', (event) => {
    console.log(event.target)

    console.log('Button click')
})



