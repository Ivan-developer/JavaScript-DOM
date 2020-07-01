// getLicalStorage
// localStorage.setItem('ключ', 'значение')
// console, application, Local Storage

// localStorage.clear() // почистить все старые данные
// localStorage.setItem('name', 'Tom')

// localStorage.getItem('name')

// в знаечение можем водить массив
// localStorage.setItem('hobbies', [1,2,3,4]);
// console.log(localStorage.getItem('hobbies'))

// с объектом особенность, он будет как string [object object]
// [1, 2].toString()
// ({name: 'Tom'}).toString() // [object object]

// что бы вывести объект надо сделать JSON.stringify()
// localStorage.setItem('hobbies-obj', JSON.stringify({name: 'Tom'}));
// console.log(localStorage.getItem('hobbies-obj')

// что бы привести к JSON есть метод .stringify()
// JSON.parse('[5,6]') - обратная операция от .stringify()

// в LocalStorage - сохраняются только строки

const getLocalStorageData2 = () => {
  // три варианта получение ключей
  // for (let i = 0; i < localStorage.length; i++){
  //     localStorage.key(i)
  // }
  // for (let i of localStorage){
  //     localStorage.key(i)
  // }
  Object.keys(localStorage);
};

// Конструкция - условный if , else
// try {
//  если true
// } catch (e) {
//  если false
// }

localStorage.setItem('hobbies', JSON.stringify({name:'Tom'}));
localStorage.setItem('name', 'Tom')

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData())
