'use strict';
/*
block переменная
i:10
Script переменная
i:0
Blobal переменная
*/

// Замыкание когда одна функция создается внутри другой


let i = 0;

if(true){
    let i = 10;
    console.log(i)
}

console.log(i)