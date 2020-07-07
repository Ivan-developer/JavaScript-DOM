// mouseenter, mouseleave, focus, blur, load, error не всплывают

const section = document.querySelector('section');

const child = document.querySelector('button');

const eventName = 'click';

child.addEventListener(eventName, (event) => {
    event.stopPropagation();
    console.log(`${eventName} on`, event.target)
});

section.addEventListener(eventName, (event)=>{
    console.log(`SECTION is handl event from`, event.target)
})