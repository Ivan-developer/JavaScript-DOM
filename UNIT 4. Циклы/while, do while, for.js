let n = 0;
while (n <= 10) {
    console.log(n);
    n++;
}

let n = 0;
do {
    console.log(n);
    n++;
} while (n <= 10)

for (let n = 0; n <= 10; n++){
    console.log(n);
}

// while ( ){
// }
// Задача №1: вывести числи от 1 и до 10
// 1.	let n = 0;
// 2.	while (n<=10){
// 3.	    console.log(n)
// 4.	    n++;
// 5.	}
// Задача №2: посчитать сумму всех чисел от 1 и до 10
// 1.	let n = 10;
// 2.	let sum = 0; //акамулятор
// 3.	while (n > 0) {
// 4.	    sum += n;
// 5.	    n -= 1;
// 6.	
// 7.	}
// 8.	console.log(sum);

// 1.	let n = 10;
// 2.	let sum = 0; //акамулятор
// 3.	do {
// 4.	    sum += n;
// 5.	    n -= 1;
// 6.	
// 7.	} while (n > 0)
// 8.	console.log(sum);

// Задача №3: умножить все не четные числа которые находятся в промежутке от m и до n
// % - означает остаток от деления ( это означает сколько осталось после деления)
// 10 % 2 = 0
// 11 % 2 = 1 
// 1.	let m = 10; 
// 2.	let n = 20;
// 3.	let result = 1;
// 4.	do {
// 5.	    if (m % 2 === 1) {
// 6.	        result *= m;
// 7.	    }
// 8.	    m++;
// 9.	} while (m <= n);
// 10.	console.log('Result: ' + result);
