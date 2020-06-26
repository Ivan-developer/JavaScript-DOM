const name = 'Ivan';
let lastName = 'Ivanov';
var age = 20;

function createUser (userName, userLastName, userAge){
    let user = {
        firstName : userName,
        lastName : userLastName,
        age: userAge
    };
    console.log(user)
}

createUser(name, lastName, age)