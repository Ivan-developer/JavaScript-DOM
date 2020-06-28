'use strict';

const father = {
    lastName: 'Ivanov',
}

const misha = {
    name: 'Misha',
    age: 35,
    isMarried: true,

    test() {},

    __proto__: father,
};

for(let key in misha){
    console.log(key);
    console.log(misha[key]);
}

for(let key in misha){
    if(!misha.hasOwnProperty(key)){
      continue;
    } else {
        console.log(key)
    }
}

// свойство из прототипа не включается 

const arr = Object.keys(misha); // возвращает массив 
const arr2 = Object.values(misha);
const arr3 = Object.entries(misha);

console.log(
arr
)

for(let key of arr2){
    console.log(key)
}

// перебор с Деструктуризацией

for(let pair of arr3){
    const [key, value] = pair;
    console.log(key,value)
    console.log(pair[0], pair[1])
}





