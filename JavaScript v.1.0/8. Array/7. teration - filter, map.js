"use strict";

// получим новый массив

// map - перебирает массив, если не будем ничего возыращать
// то он вернет пустой - underfined
// filter - отфильтрованный

const numbers = [10, 11, 12, 13];

// const callback = (item, index, arr) => {
//     console.log(item, index, arr)
//     return item >= 11;
// }

// const result = numbers.filter(callback);
// console.log(result)

const callback = (item, index, arr) => {
  return item, index, arr;
};

const result2 = numbers.map(callback);
console.log(result2);



const numbers2 = [10, 11, 12, 13];

const callback2 = (item, index, arr) => {
    return item;
  };

const result3 = numbers2.map(callback2).filter((item) => {
  return item > 11;
});

console.log(result3);

// Сократить
