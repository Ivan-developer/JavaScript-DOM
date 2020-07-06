const input = document.querySelector('input');


// свойства и атрибут не сихранизированны между собой
input.setAttribute('value', 456)

input.value = 789;

console.log(input.value)
