// Урок 7. JavaScript. Все о ES6 Классах (+ Практическое Применение)

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// }

class Animal {
    // статические методы или переменные, 
    // static доступна только к классу
    static type = 'ANIMAL';

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.hasTail = options.age;
    }
    voice(){
        console.log(`I am ${this.name}`);
    }
}

const animal = new Animal (
    {
        name : 'Animal',
        age: 5,
        hasTail: true,
    }
)

animal.voice()

console.log(animal);

console.log(Animal.type);

// наследование

class Cat extends Animal {
    static type = 'CAT'

    constructor(options){
        super(options)
        this.color = options.color;
    }

    get ageInfo(){
        return this.age * 7;
    }

    set ageInfo (newAge){
        this.age = newAge;
    }
}

const cat = new Cat ({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black'
})

cat.voice();
console.log(cat.ageInfo);

cat.ageInfo = 8;
console.log(cat.ageInfo)

console.log(cat);

// ===================================================
// 

class Component {
    constructor (selector){
        this.$el = document.querySelector(selector);     
    }

    hide(){
        this.$el.style.display = 'none';
    }
    show(){
        this.$el.style.display = 'block';
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px';
        this.$el.style.background = options.color;
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})

const box2 = new Box({
    selector: '#box2',
    size: 100,
    color: 'blue',
})

class Circle extends Box {
    constructor(options){
        super(options)

        this.$el.style.borderRadius = '50%';
    }
}

const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green',
})












































