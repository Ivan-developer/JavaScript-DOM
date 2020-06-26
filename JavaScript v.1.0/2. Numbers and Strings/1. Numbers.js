// from string to number

const value = '1100.50px';

console.log(Number(value)); // NaN
console.log(+value); // NaN
console.log(parseFloat(value)) // 1100.5
console.log(parseInt(value, 2)) // 1100

// Округление чисел 
const number1 = 12.5;
const number2 = -12.5;

console.log(
    Math.floor(number1),
    Math.floor(number2)   
)

console.log(
    Math.ceil(number1),
    Math.ceil(number2)   
)

console.log(
    Math.round(number1),
    Math.round(number2)   
)

console.log(
    Math.trunc(number1),
    Math.trunc(number2)   
)

console.log(
    number1.toFixed(0),
    number2.toFixed(0)   
)


const input = '15$';
const value1 = +input;

if(!isFinite(value1)){
    console.log('error')
} else {
    console.log('success')
}

// NaN === NaN // false

console.log(value1)

// случайные цифты в js .random()

for (let i = 0; i < 20; i++){
    console.log(
        Math.random()
    )
}
























