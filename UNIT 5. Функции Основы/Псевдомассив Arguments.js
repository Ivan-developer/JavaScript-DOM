// Псевдомассив Arguments

// 1.	function one(a) {
// 2.	    console.log(a)
// 3.	}
// 4.	one(5)

// 1.	function one(a, b) {
// 2.	    console.log(a)
// 3.	    console.log(b)
// 4.	}
// 5.	one(5) // 5 , underfined

// 1.	function one(a) {
// 2.	    console.log(a)
// 3.	}
// 4.	one(5, 6, 7, 8) // 5

// 1.	function one() {
// 2.	    console.log(arguments[3])
// 3.	}
// 4.	
// 5.	one(1, 2, 3, 4, 5) // 4

// У него есть: 
// 1. свойство length , можно обращаться по индексу!! [0] [1] [2]
// 2. у него нет меттодов как у массива 
// 3. typeof - вывод : псвевдо массив === объектом 
// 4. Es5 =
// 5. Es6 = 'use strict'

// 1.	// написал .filter() классическим for()
// 2.	
// 3.	function one() {
// 4.	    for (let i = 0; i <= arguments.length; i++) {
// 5.	        if (arguments[i] <= 6) { 
// 6.	            console.log(arguments[i])
// 7.	        }
// 8.	    }
// 9.	}
// 10.	one(5, 6, 7, 8, 3, 1, 89)

// ________________________________________________________

// 1.	БЕЗ 'use strict'; 
// 2.	function one(a) {
// 3.	    console.log(a); // 5
// 4.	    arguments[0] = "Gena"; 
// 5.	    console.log(arguments); // [Gena, 6, 7, 8]
// 6.	    console.log(a); // ? - перезаписалось // Gena
// 7.	}
// 8.	
// 9.	one(5, 6, 7, 8);

// режим 'use strict ' - в строгом режиме , аргументс изменяется если обращаемся на прямую , es 6 

// 1.	'use strict'; - можно снаруже 
// 2.	
// 3.	function one(a) {
// 4.	    'use strict'; - можно внутри 
// 5.	    console.log(a); // 5 
// 6.	    arguments[0] = "Gena";
// 7.	    console.log(arguments); // [Gena, 6, 7, 8]
// 8.	    console.log(a); // 5
// 9.	}
// 10.	
// 11.	one(5, 6, 7, 8);

// Псевдо массив , перевернуть в массив и работать аргументами !

// Array.from / [...]
// Есть универсальный метод Array.from, который принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array. После этого мы уже можем использовать методы массивов.

// 1.	'use strict';
// 2.	
// 3.	function one() {
// 4.	    let a = Array.from(arguments);
// 5.	    console.log(a);
// 6.	}
// 7.	
// 8.	one(4, 5, 6, 7, 8);

// 1.	typeof - вывод : псвевдо массив === объектом 
// 2.	'use strict';
// 3.	
// 4.	function one() {
// 5.	    let a = Array.from(arguments);
// 6.	    console.log(a);
// 7.	    let b = a.filter(c => {
// 8.	        if (c <= 6) {
// 9.	            console.log(c)
// 10.	        }
// 11.	    })
// 12.	}
// 13.	
// 14.	one(4, 5, 6, 7, 8);

// 1.	spread оператор [...arguments]
// 2.	function one() {
// 3.	    let a = [...arguments];
// 4.	    console.log(a);
// 5.	    let b = a.filter(c => {
// 6.	        if (c <= 6) {
// 7.	            console.log(c)
// 8.	        }
// 9.	    })
// 10.	}
// 11.	
// 12.	one(4, 5, 6, 7, 8);

// learn Js 
// https://learn.javascript.ru/arguments-pseudoarray
// https://learn.javascript.ru/rest-parameters-spread-operator

// Псевдомассив Arguments

// 1.	function one(a) {
// 2.	    console.log(a)
// 3.	}
// 4.	one(5)

// 1.	function one(a, b) {
// 2.	    console.log(a)
// 3.	    console.log(b)
// 4.	}
// 5.	one(5) // 5 , underfined

// 1.	function one(a) {
// 2.	    console.log(a)
// 3.	}
// 4.	one(5, 6, 7, 8)

// 1.	function one(b) {
// 2.	    console.log(b)
// 3.	}
// 4.	
// 5.	one(1, 2, 3, 4, 5) // 1

// 1.	function one() {
// 2.	    console.log(arguments[3])
// 3.	}
// 4.	
// 5.	one(1, 2, 3, 4, 5)

// У него есть: 
// 1. свойство length , можно обращаться по индексу!! [0] [1] [2]
// 2. у него нет меттодов как у массива 
// 3. typeof - вывод : псвевдо массив === объектом 
// 4. Es5 =
// 5. Es6 = 'use strict'

// 1.	// написал .filter() классическим for()
// 2.	
// 3.	function one() {
// 4.	    console.log(arguments);
// 5.	    for (let i = 0; i <= arguments.length; i++) {
// 6.	        if (arguments[i] <= 6) { 
// 7.	            console.log(arguments[i])
// 8.	        }
// 9.	    }
// 10.	}
// 11.	one(5, 6, 7, 8, 3, 1, 89)

// 1.	function one() {
// 2.	    console.log(arguments)
// 3.	}
// 4.	one(5, 6, 7, 8, 'Gena', true, NaN)

// 1.	Присвоили псевдо массива 
// 2.	function one() {
// 3.	    arguments[0] = 6;
// 4.	    console.log(arguments)
// 5.	}
// 6.	
// 7.	one(1, 2, 3, 4, 5)

// 1.	Перетерли аргумент 
// 2.	function one(a) {
// 3.	    console.log(a); // 5???
// 4.	    arguments[0] = 6;
// 5.	    console.log(arguments)
// 6.	    console.log(a) /// ?? --- перетерлась 
// 7.	}
// 8.	
// 9.	one(1, 2, 3, 4, 5)

// 1.	function one(a) {
// 2.	    console.log(a);
// 3.	    a = 6;
// 4.	    console.log(arguments)
// 5.	    console.log(a)
// 6.	}
// 7.	
// 8.	one(1, 2, 3, 4, 5)

// режим 'use strict ' - в строгом режиме , аргументс изменяется если обращаемся на прямую , es 6 

// 1.	'use strict'; - можно снаруже 
// 2.	
// 3.	function one(a) {
// 4.	    'use strict'; - можно внутри 
// 5.	    console.log(a);
// 6.	    arguments[0] = "Gena";
// 7.	    console.log(arguments);
// 8.	    console.log(a);
// 9.	}
// 10.	
// 11.	one(5, 6, 7, 8);

// Псевдо массив , перевернуть в массив и работать аргументами !

// Array.from / [...]
// Есть универсальный метод Array.from, который принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array. После этого мы уже можем использовать методы массивов.

// https://learn.javascript.ru/iterable

// 1.	'use strict';
// 2.	
// 3.	function one(a) {
// 4.	    let b;
// 5.	    console.log(a);
// 6.	    arguments[0] = "Gena";
// 7.	    console.log(arguments);
// 8.	    console.log(a);
// 9.	    b = Array.from(arguments);
// 10.	    console.log(b);
// 11.	}
// 12.	
// 13.	one(5, 6, 7, 8);

// 1.	typeof - вывод : псвевдо массив === объектом 
// 2.	'use strict';
// 3.	
// 4.	function one(a) {
// 5.	    let b;
// 6.	    console.log(a);
// 7.	    arguments[0] = "Gena";
// 8.	    console.log(typeof arguments);
// 9.	    console.log(a);
// 10.	    b = Array.from(arguments);
// 11.	    console.log(typeof b);
// 12.	}
// 13.	
// 14.	one(5, 6, 7, 8);
