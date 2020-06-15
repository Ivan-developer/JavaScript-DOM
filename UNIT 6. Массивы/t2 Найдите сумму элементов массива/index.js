function getSum(array) {
    let sum = 0;

    if (!Array.isArray(array)) {
        return null;
    }

    for (let a = 0; a < array.length; a++) {
        sum += array[a];
    }
    return sum;
}