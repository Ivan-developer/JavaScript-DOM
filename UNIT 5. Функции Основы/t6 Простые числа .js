function getPrimes(n) {

    reset: for (let a = 2; a <= n; a++) {

        for (let b = 2; b < a; b++) {
            if (a % b == 0) continue reset;
        }
        console.log(a);
    }
}