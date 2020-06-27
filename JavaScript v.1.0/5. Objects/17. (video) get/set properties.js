"use strict";

// function getter setter
// свойстов __proto__ такой же getter setter

// Вычисляемые свойства это такие свойства которые используются как обычные совйства 
// На самом деле они являются методами
// getter - при чтении getter
// setter - при записи setter


const user5 = {
  firstName: "Ivan",
  lastName: "Ivanov",

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

user5.firstName = "Max";

console.log(user5.getFullName());

// Сократили - get отдельно, тогда можно короче вызывать
// getter - вычисляемое свойство
// Есть особенность если его попытаемся присвоить то невозможно
// Потому что у него есть getter!!!!
// Чтобы можно было установить надо добавит ему set!!

const user6 = {
  firstName: "Ivan",
  lastName: "Ivanov",

  get FullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

user6.firstName = "Tom";

console.log(user6.FullName);

// ВАЖНО
// Есть особенность если его попытаемся присвоить то невозможно
// Потому что у него есть getter!!!!
// Чтобы можно было установить надо добавит ему set!!
// Если у свойства не будет getter то мы его не сможем прочитать

const user7 = {
  firstName: "Ivan",
  lastName: "Ivanov",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    console.log(value);
  },
};

// то что после firstName = будет попадать в setter!!!

user7.firstName = "Tom";

console.log(user7.fullName);

//______________________________________________________________________

const user8 = {
    firstName: "Ivan",
    lastName: "Ivanov",
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    set fullName(value) {
        const parts = value.trim().split(' ')

        if(parts.lenght < 2){
            return;
        } else{
            this.firstName = parts[0];
            this.lastName = parts[1]
        }

        get __proto__(){
            this.[[Prototype]]
        }

        // Когда пытаемся записать __proto__

        set __proto__(value){
            if(typeof value !== 'object'){
                  return;
            }
        }
    },
  };
  
  // то что после firstName = будет попадать в setter!!!
  
  user8.firstName = "   Tom Ivanov";
  
  console.log(user8.fullName);
// _________________________________________________________________

// function getter setter

const user1 = {
  firstName: "Ivan",
  lastName: "Ivanov",
  fullName: "Ivan Ivanov",
};

console.log(user1.fullName);

const user2 = {
  firstName: "Ivan",
  lastName: "Ivanov",
  fullName: `${user2.firstName} ${user2.lastName}`,
};

console.log(user2.fullName);

// this может быть только в методе , в объекте будет underfined

const user3 = {
  firstName: "Ivan",
  lastName: "Ivanov",
  fullName: `${this.firstName} ${this.lastName}`,
};

console.log(user3.fullName);

const user4 = {
  firstName: "Ivan",
  lastName: "Ivanov",
};

(user4.fullName = `${user4.firstName} ${user4.lastName}`),
  console.log(user4.fullName);

// _____________________________________________________________________
