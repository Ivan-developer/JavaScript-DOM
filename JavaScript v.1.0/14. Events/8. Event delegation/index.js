

const button = document.querySelector('button');

const input = document.querySelector('input');

const list = document.querySelector('.topics');


list.addEventListener('click', (event) => {
    const item = event.target.closest('.topics');

    if(!item || !list.contains(item)){
        return;
    }
    console.log(item.innerText)
})

setTimeout(() =>{
    list.insertAdjacentHTML('beforeend', `
    <li class="topic">
    TypeScript
    </li> 
    `)
}, 3000)