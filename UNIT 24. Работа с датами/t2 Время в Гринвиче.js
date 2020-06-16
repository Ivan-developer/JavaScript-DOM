// Время в Гринвиче
// JAVASCRIPT Урок 24. Работа с датами
// Напишите функцию, которая вернет время в Гринвиче

// Основные требования:
// 1. Функция должна экспортироваться под именем getGreenwichTime
// 2. Сигнатура: getGreenwichTime(date), где date - объект даты.
// 3. Функция должна вернуть время в формате '06:43'
// 4. Входящая дата должна остаться неизменной

//Форматирование даты - part 1. Функция, которая возвращает время в Гринвиче.
const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});
export const getGreenwichTime = date => formatter.format(date);
console.log(getGreenwichTime(new Date()));