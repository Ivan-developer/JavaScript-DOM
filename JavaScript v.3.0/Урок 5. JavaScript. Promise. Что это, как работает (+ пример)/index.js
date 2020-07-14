// Урок 5. JavaScript. Promise. Что это, как работает (+ пример)
/*
Promise по сути это определенная обвертка над асинхроностью, которая добавляет удобство для написания кода

Сделаем небольшую эмуляцию работы с сервером, через асихронность и через callback
Request - запрос
when - когда, then - тогда. 
В промисе колбэк-функция -> 
resolve (разрешить) -> then(тогда) ->
*/
/*
console.log('Request data...');

setTimeout(() => {
    console.log('Preparing data...')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working',
    }

    setTimeout(()=>{
        backendData.modified = true;
        console.log('Data received', backendData)
    }, 2000)
}, 2000)
*/

// сверху у нас длинный код, promise появились что бы решить эту задачу
// и упроситить работу с асихроными операциями

// сделаем тоже самое что и сверху только с помощью promise

/*
Prmise принимает call bakc function
, call back функция принимает два параметра:
1. первый resolve - (о успехе) вызывается тогда когда закончина асинхронная операция и причем закончена успешно
2. второй reject - (о не успехе)
Два эти параметра являются функциями!
*/

console.log("Request data...");

const p = new Promise(function (resolve, reject) {
  // Асихронный код обвернули в promise
  setTimeout(() => {
    console.log("Preparing data...");
    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };
    resolve(backendData); // вызываем функцию и таким образом говорим что promise завершил свое выполнение
  }, 2000);
});

// метод .then() переводится как .тогда(), принимает call функцию
// callback в then работает когда будет выполнится метод resolve()

p.then((data) => {
  // в аргументе data хранится backendData
  console.log("Promise resolved", data);
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
      //console.log("Data received", backendData);
    }, 2000);
  });

  // когда выполнится resolve(data), которая сверху
  p2.then((clientData) => {
    console.log("Data received", clientData);
  });
});

// Снизу сократим то что сверху!
p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  });
})

  // метод catch
  // метод finaly будет всегда вызван не зависит от ошибки

  .then((clientData) => {
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => {
    console.log("Modifined", data);
  })
  .catch((err) => console.error("Error: ", err))
  .finally(() => console.log("Finally"));

//====================================

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};

// then - дальше когда все пройдет
/*
sleep(2000).then(()=>{
    console.log('After 2 sec')
})

sleep(3000).then(()=>{
    console.log('After 2 sec')
})
*/

// метод all

Promise.all([sleep(2000), sleep(3000)])
.then(()=> {
    console.log('All promises')
})

// метод race

Promise.race([sleep(2000), sleep(3000)])
.then(()=> {
    console.log('Race promises')
})
