function getSum(b, c) {
    let sum = 0;
    for (let i = b; i <= c; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}