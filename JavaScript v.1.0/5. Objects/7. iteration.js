'use strict';

// Перебор свойст объекта

const point = {
    x : 1,
    y : 2,
    z : 3,
};

for(let key in point){
    console.log(key)
}

for(let key in point){
    console.log(point[key])
}

const data = {
    '100': 100,
    '-273': -273,
    0: 0,
};

for(let key in data){
    console.log(data[key])
}