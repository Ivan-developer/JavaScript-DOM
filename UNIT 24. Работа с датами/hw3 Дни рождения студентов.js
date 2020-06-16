// Дни рождения студентов
//  JAVASCRIPT  Урок 24. Работа с датами
// Напишите функцию, которая сгруппирует студентов по дню рождения

// Основные требования:
// 1. Функция должна экспортироваться под именем studentsBirthDays
// 2. Сигнатура: studentsBirthDays(students) => { Jan: ['Tom', 'Ben'], Mar: ['Sam'] }, где students - массив вида [{ name: 'Tom', birthDate: '01/15/2010' }, { name: 'Ben', birthDate: '01/17/2008' }, { name: 'Sam', birthDate: '03/15/2010' }]
// 3. Внутри каждого месяца студенты должны быть отсортированы по дате (день месяца по счету)
// 4. Входящий массив должен остаться неизменным

//Дни рождения студентов. Функция, группирующая студентов по дню рождения.
// const students = [
//     { name: 'Tom', birthDate: '01/15/2010' },
//     { name: 'Ann', birthDate: '03/19/2011' },
//     { name: 'Ben', birthDate: '01/21/2009' },
//     { name: 'Sam', birthDate: '03/01/2012' }
// ];

export const studentsBirthDays = students => {
    let birthDays = {};
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
    ];
    students.sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .map(elem => {

            if (birthDays[months[new Date(elem.birthDate).getMonth()]] === undefined) {
                birthDays[months[new Date(elem.birthDate).getMonth()]] = [];

            }
            birthDays[months[new Date(elem.birthDate).getMonth()]].push(elem.name);
        });
    return birthDays;
};
// console.log(studentsBirthDays(students));
// console.log(students);