"use strict";

/*
this это контекст вызова

*/

function f() {
  console.log(this);
}

f(); // underfined, если без use srtict, то было было глобальный объект window

const user = {
  name: "Misha",
  test: f,
};

user.test(); // объект пере точкой

f.call(user); // закрепил контекст call
f.apply(user);

f.bind(user); // надо вызывать предыдущие не надо

const g = f.bind(user);
g();

// в => функции this перется из внешней области видимости, у него нет своего this
const arrow = () => {
  console.log(this);
};
arrow();
// решение вынести ее внутрь функции
// сделать замыкание
const f = function () {
  const arrow = () => {
    console.log(this);
  };
  arrow();
};

console.log(this); // вне функции сылается на глобальный объект window

/*

Global - this === window
arrow() - this === is taken from outside
f() - this === underfiend (если не юз стрикт то виндов)
user.method() - this === user
new f() - this === just created object

f.call(user) - this === user
f.apply(user) - this === user

const g = f.bind(user) - this === user
g()
*/