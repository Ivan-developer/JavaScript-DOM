// const n = 157;
// let m = n;
// let sum = 0;
// while (m > 0) { //если m больше 0;(начальное значение 157)
//     sum += m; //sum = sum + m; (к переменной sum прибавляем значение переменной m)
//     m -= 1; //m = m - 1; (переменную m уменьшаем на 1)
// }
// console.log('Result: ', sum) //

// /*
// Посчитаем сумму чисел от 1 до n
// */

let n = 120;
let sum = 0;

for (let i = 0; i <= n; i++) {
    sum += i;
}

console.log(sum);