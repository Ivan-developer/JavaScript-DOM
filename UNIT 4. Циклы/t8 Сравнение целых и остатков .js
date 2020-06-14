let task = 0;

for (let i = 1; i > 1000; i++) {
    task + i;
}

let num = Math.floor(task / 1234);
let numWithout = num * 1234;
let result = task - numWithout;
num > result ? console.log(true) : console.log(false);