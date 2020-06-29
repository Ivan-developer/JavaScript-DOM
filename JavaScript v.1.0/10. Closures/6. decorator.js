'use strict';

// Декораторы - Рецепты в ресторане

const cookPasta = (amount) => `%c ${amount}g of %c Pasta`;
const cookMeat = (amount) => `%c ${amount}g of %c Meat`;
const cookSoup = (amount) => `%c ${amount}g of %c Soup`;

// создаем функцию которая будет досаливать

function addSalt (dish){
    return `Salted ${dish}`;
}

function creatSaltedReceipt(cookDish){
    // функция - генератор рецептов
    // создает новые на основании старых
    return (...params) => {
        const dish = cookDish(...params);
        return addSalt(dish)
    }

}

function creatReceiptWithCount(cookDish){
    let count = 0;
    return (...args) => {
        count++;
        console.log(count)
        return cookDish(...params)
    }
}

const cookSalatedPasta = creatReceiptWithCount(
    creatSaltedReceipt(cookPasta)
)



const cookSalatedPasta = creatSaltedReceipt(cookPasta);
const cookSalatedMeat = creatSaltedReceipt(cookMeat);

let pasta1 = cookSalatedPasta(200);
console.log(pasta1);

let pasta2 = cookSalatedPasta(300);
console.log(pasta2);


