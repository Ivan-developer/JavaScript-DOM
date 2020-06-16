// Установка компонентов даты
// JAVASCRIPT Урок 24. Работа с датами
// Напишите функцию, которая выведет день недели через n дней после указанной даты.

// Основные требования:
// 1. Функция должна экспортироваться под именем dayOfWeek
// 2. Сигнатура: dayOfWeek(date, days), где date - объект даты, days - целое число дней.
// 3. Функция должна вернуть строку вида 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su'
// 4. Считаем что неделя стартует с воскресенья
// 5. Входящая дата должна остаться неизменной

// Установка компонентов даты. Функция, которая выводит день недели через n дней после указанной даты.

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Fr', 'St']
export const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekDays[new Date(dateInFuture).getDay()];

};
const result = dayOfWeek(new Date(), 1);
console.log(result);