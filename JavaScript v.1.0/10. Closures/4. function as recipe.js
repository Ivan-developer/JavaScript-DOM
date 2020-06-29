'use strict';

let sugar = 'brown sugar';

const cookCake = () => {
    console.log(`Cake with ${sugar}`);
}

cookCake()

sugar = 'salt';

cookCake();

// ___________________________________________________________

// Замыкание 
// Замыкание когда одна функция создается внутри другой

function createCakeRecipe(sugar) {
    return () => {
        console.log(`Cake with ${sugar}`);
    }
}

const recipe1 = createCakeRecipe('with sugar');

recipe1()