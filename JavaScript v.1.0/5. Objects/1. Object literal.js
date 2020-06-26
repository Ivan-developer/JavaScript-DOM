const age = 34;
const age1 = 54;

const user = {
    name : 'Ivan',
    'name1' : 'Ivan',
   ['is' + 'Marri'] : true,
   age, // короткая запись
   age1 : age1,

   hello : function(){
      return 'hello'
   },
    world() {
       'world'
   }
}

// const user1 = {};
// const user1 = new Object();

console.log(user)