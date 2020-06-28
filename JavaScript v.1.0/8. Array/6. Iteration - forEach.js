'use strict';

// forEach короткая запись цикла for 
// Важно: результат forEach получить нельзя

// принимает три аргумента 
// 1. Элемент массива 2. Его индекс 3. Сылку на самм массив

const numbers = [10, 11, 12, 13]; 

const callback = (item, index, arr) => {
    console.log(item, index, arr);
};

numbers.forEach(callback);

// Перепишем в цикл for
const numbers2 = [10, 11, 12, 13]; 

for (let i = 0; i < numbers2.length; i++){
    const item = numbers2[i];
    const index = i;
    const arr = numbers2;
    console.log(item, index, arr)
}