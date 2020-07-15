// Урок 6. JavaScript. Объекты с Object.create. Что такое getters, setters
// Создадм объект с помощью глобального объекта Object

const person = Object.create(
  {
    calculateAge() {
      console.log("Age: ", new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: "Ivan",
      enumerable: true, // вернуть дефолт значение, что бы ключ видели у цикла for
      writable: true, // по умолчанию он в false, это означает что объект нельзя изменять person.name = 'Bob';
      configurable: true, // данный параметр говорит что мы можем убирать ключ из объекта
    },
    birthYear: {
      value: 1990,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        console.log("Set age", value);
        // document.body.style.background = 'red';
      },
    },
  }
);

person.name = "Bob";
person.age = 100;

console.log(person.age);

person.calculateAge();

// const person = {
//     name: 'Ivan',
//     birthYear: 1990,
// }

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log("Key", key, person[key]);
  }
  console.log("Key", key, person[key]);
}
