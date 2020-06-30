// Литералы
console.log(
    null, undefined,

    true, false,

    42, 0.5, NaN, Infinity,

    'str', "str", `str ${1 + 2}`,

    /[a-z]+/i, // регулярное вырожение

    { x: 2, y: 3},

    [1,2,3],

    function(x,y){
        return x + y;
    },

    (x,y) => x+y
)