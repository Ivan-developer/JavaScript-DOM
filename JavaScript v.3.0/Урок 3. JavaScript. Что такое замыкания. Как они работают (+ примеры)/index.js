/*Урок 3. JavaScript. Что такое замыкания. Как они работают (+ примеры)

Замыкание это функция внутри другой функции

*/

function creatCalcFunction(n){
    return function(){
        console.log(1000*n)
    }
}

const calc = creatCalcFunction(1000)
calc()

function creatIncrement(n){
    return function(num){
        return n + num
    }
}

const addOne = creatIncrement(1);
console.log(addOne(5))

function urlGenerator(domain) {
    return function(url) {
        return `https:// ${url}.${domain}`
    }
}

const comUrl = urlGenerator('com');
console.log(comUrl('google'));

console.log(comUrl('netflix'));

const comRu = urlGenerator('ru');
console.log(comUrl('yandex'));
console.log(comUrl('vk'));





























