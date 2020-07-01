window.addEventListener('storage', function (e) {
    console.log('change');
    document.querySelector('.out').textContent = localStorage.getItem('b1');
});

// ключ , значение, получить , вывести
localStorage.setItem('data', 5);
console.log(localStorage.getItem('data'));

// когда сохраняем массив в localStorag он приобразуется в массив
const a = [3, 4, 5];
localStorage.setItem('a', JSON.stringify(a));
let b = localStorage.getItem('a');
b = JSON.parse(b);
console.log(b);
console.log(b[1]);
console.log(typeof b);

// объект
const c = {
    hello: 5,
    k: 2,
    4: 'hi'
};
localStorage.setItem('c', JSON.stringify(c));
let d = localStorage.getItem('c');
d = JSON.parse(d);
console.log(d);
console.log(typeof b);

