// SessionStorage - работает на одной вкладке
// LocalStorage - на всех , данные хранятся в брайзере
// используется что бы между перезагрузок вкладок, у нас сохранялись одни и теже данные 

const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChange = e => {
    const isBtn = e.target.classList.contains('counter__button');

    if (!isBtn) {
        return;
    }

    const action = e.target.dataset.action;
    const oldVelue = Number(counterValueElem.textContent);

    const newValue = action === 'decrease' ?
        oldVelue - 1 :
        oldVelue + 1;

    localStorage.setItem('counterValue', newValue);
    counterValueElem.textContent = newValue;

}

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = event => {
    counterValueElem.textContent = event.newValue;
}
window.addEventListener('storage', onStorageChange);


const onDocumentLoaded = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded);