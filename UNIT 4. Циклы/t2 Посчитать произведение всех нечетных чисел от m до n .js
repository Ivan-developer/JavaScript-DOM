const m = 10;
const n = 5;

let result = 1;

for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
        result *= i;
    }
}

// const m = 16;
// const n = 25;
// let man = m;
// let result = 1;
// do {
//     if (man % 2 === 1) {
//         result *= man;
//     }
//     man++;
// }
// while (man <= n)
// console.log('Result: ' + result);

// /*
// Посчитать произведение всех нечетных чисел от m до n
    
// */