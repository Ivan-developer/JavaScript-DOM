let sum = 0;
for (let a = 0; a < 1000; a++) {
    if (a % 2 === 1) {
        console.log('Found');
        sum += a;
    }
}

if (sum * 5 > 5000) {
    console.log('Bigger');
} else if (sum * 5 > 5000) {
    console.log('Equal');
} else {
    console.log('Smaller');
}