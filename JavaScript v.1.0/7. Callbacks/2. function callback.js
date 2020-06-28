'use strict';

'use strict';

// Функция как аргумент передается в другую функцию 
// и это называется callback

function print (x) {
    console.log(x)
}

function test (f){
    f(4) // очень важно - f это принт , 
    // в него передаем аргумент, который в 
    // print передаетсяs
}

test(print)

test(function(y){
    console.log(y);
});

// аналогично

let f1 = function(y){
    console.log(y);
};

test(f1)