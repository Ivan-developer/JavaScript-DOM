'use strict';

// Перебрать массив 

const numbers = [10,11,12,13,14,15];

for (let i = 0; i < numbers.length; i++){
    const current = numbers[i];
    console.log(current);
}

const numbers2 = '1,2,3,4,5,6';

for (let i = 0; i < numbers2.length; i++){
    const current = numbers2[i];
    console.log(current);
}

for (let arr of numbers){
      console.log(arr)
}

const callback = (current) => {
    console.log(current);
}

numbers.forEach(callback);