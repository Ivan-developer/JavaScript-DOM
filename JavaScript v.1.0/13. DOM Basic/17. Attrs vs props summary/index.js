/*

Булевые атрибуты это:

readonly

checked

disabled

*/

const form = document.querySelector('form');

const textFies = document.querySelector('[type="text"]');

const checkbox = document.querySelector('[type="checkbox"]');

const button = document.querySelector('button');

console.log(textFies.getAttribute('readonly'));
console.dir(textFies.readOnly)
console.log(checkbox.checked)
console.log(button.disabled)