const arr = [
    123,
    'hello',
    true,
    null,
    undefined,
    {},
    function(){}
];

let arr2 = new Array(0, 1, 2, 3);
arr2 = '12213'.split(' ');
arr2 = Array.from('1231');
arr2 = [...'2323']

let arr3 = [];

for(let i = 0; i < 5; i++){
    arr3.push(i)
}

let arr4 = [...Array(5).keys()];
console.log(arr4)


console.log(arr3)

console.log(arr2)

console.log(arr)

// перебрать массив

const number = [1, 2, 3, 4, 5]

// const number = '234234'

// for(let i = 0; i < number.length; i++){
//     const current = number[i];
//     console.log(current)
// }

// for(let current of number){
//     console.log(current)
// }

const callback = (current, index, arr) => {
    console.log(current, index, arr);
}

number.forEach(callback);

// Мутирующие методы: 

const numbers = [0, 1, 2, 3, 4, 5];

numbers.push(6, 7); 
numbers.pop(6, 7); 
numbers.unshift(6, 7); 
numbers.shift(6, 7); 
numbers.splice(6, 7); 
numbers.reverse(6, 7); 
numbers.fill(6, 7); 
numbers.sort(6, 7); 





























