'use strict';

// array creation

const arr = [
    123,
    'hello',
    true,
    null,
    undefined,
    {},
    function(){  
    }
];

const arr1 = [1,2,3,4];
const arr2 = new Array(0,1,2,3,4);
const arr3 = '1,2,3,4,5'.split(' ');
const arr4 = Array.from('1,2,3,4');
const arr5 = [...'1,2,3,4'];

console.log(arr5);

console.log(arr);

const arr6 = [];

for(let i = 0; i < 10; i++){
        arr6.push([i])
}

// Читерский способ 

const arr7 = [...Array(10).keys()]


console.log(arr7)