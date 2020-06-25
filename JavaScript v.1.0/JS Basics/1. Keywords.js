// Ключевые слова
const name = 'Ivan';
let lastName = 'Ivanov';
var age = 22;

var secondName = typeof 'Max';

// в объекте можно называть ключи зарезерв словами
// но это плохая практика!
let user = {
    let: 20,
    const: 'Ivan',
}

console.log(user.let)

// typeof - получает тип данных

// if(){

// }

// список ключевых слов
// Зарезервированные слова: class, break, new...

console.log(name, lastName, age, secondName)