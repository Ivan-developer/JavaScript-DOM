// Типы данных
const arr = [
    null, undefined,
    true, false,
    42, NaN, Infinity,
    'str', "str", `str ${1 + 2}`,

    { x: 2, y: 3},
    [1,2,3],
    /[a-z]+/i,

    // Новые типы 
    32342234234n, //bigint - для операций с большими числами
    Symbol('something'), // symbol - испл место строк для служебных свойств объекта


    function(x,y){
        return x + y;
    },
    (x,y) => x+y
]

for(let value of arr){
    console.log(typeof value)
}