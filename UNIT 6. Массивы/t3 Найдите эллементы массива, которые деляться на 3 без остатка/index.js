function getSpecialNumbers(m, n) {
    let newArr = [];
    for (let a = m; a <= n; a++) {
        if (a % 3 === 0) {
            newArr.push(a);
        }
    }
    return newArr;
}