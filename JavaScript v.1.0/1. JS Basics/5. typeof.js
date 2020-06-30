// Типы данных
// 8 типов данных
// typeof что бы узнать тип данных

const arr = [
  true, // boolean

  42, // number

  NaN, // number

  "something", // string

  undefined, // underfined

  null, // obj

  { x: 2, y: 3 }, // obj
  [1, 2, 3], // obj
  /[a-z]+/i, // obj

  // Новые типы
  32342234234n, //bigint - для операций с большими числами
  Symbol("something"), // symbol - испл место строк для служебных свойств объекта

  function (x, y) { // function
    return x + y;
  },

  (x, y) => x + y, // function
];

for (let value of arr) {
  console.log(typeof value);
}
