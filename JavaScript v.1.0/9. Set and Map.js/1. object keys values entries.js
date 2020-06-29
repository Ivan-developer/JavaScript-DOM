'use strict';

const father = {
    lastName: 'Ivanov',
}

const ivan = {
    name: 'Ivan',
    age: 18,
    isMarried: true,
    test(){},
    __proto__: father
}

for(let key of Object.keys(ivan)){
    console.log(key)
}

for(let pair of Object.entries(ivan)){
    console.log(pair[0], pair[1])
}

// Деструктуризация 

for(let pair of Object.entries(ivan)){
    const [key, value] = pair;
    console.log(key, value)
}



console.log(Object.keys(ivan));

// Перебрать ivan что бы перебор не включал в себя __proto__

for (let key in ivan){
    if(!ivan.hasOwnProperty(key)){
        continue;
    }
    console.log(key)
}