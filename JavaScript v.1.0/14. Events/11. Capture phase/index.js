
const section = document.querySelector('section');

const button = document.querySelector('button');

const eventName = 'click';

const bubleHandler = (event) => {
    console.log('bubble', event.currentTarget.tagName);
}

const captureHandler = (event) => {
    console.log('capture', event.currentTarget.tagName);
}

document.body.addEventListener(eventName, bubleHandler);
document.body.addEventListener(eventName, captureHandler, true);

section.addEventListener(eventName, bubleHandler);
section.addEventListener(eventName, captureHandler, true);
button.addEventListener(eventName, bubleHandler);
button.addEventListener(eventName, captureHandler, true);
