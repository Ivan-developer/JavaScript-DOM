// Разница дат
// JAVASCRIPT Урок 24. Работа с датами
// Напишите функцию, которая посчитает разницу между двумя датами

// Основные требования:
// 1. Функция должна экспортироваться под именем getDiff
// 2. Сигнатура: getDiff(startDate, endDate), где startDate, endDate - объекты даты.
// 3. Функция должна вернуть разницу в формате 275d 2h 58m 16s
// 4. Входящие даты должны остаться неизменными
// 5. Функция должна искать разницу, не зависимо от того, какая дата из переданных меньше

//Форматирование даты - part 2. Функция, которая возвращает время в промежутке.
const date1 = new Date('May 17, 1995 03:24:00');
const date2 = new Date('December 27, 1996 09:25:00');

export const getDiff = (startDate, endDate) => {
    const minInMs = 60 * 1000;
    const hoursInMs = minInMs * 60;
    const daysInMs = hoursInMs * 24;

    const differInMs = Math.abs(Date.parse(startDate) - Date.parse(endDate));

    const days = Math.trunc(differInMs / daysInMs);
    const daysIntegerInMs = days * daysInMs;
    const leftMsWithoutDays = differInMs - daysIntegerInMs;

    const hours = Math.trunc(leftMsWithoutDays / hoursInMs);
    const hoursIntegerInMs = hours * hoursInMs;
    const leftMsWithoutHours = leftMsWithoutDays - hoursIntegerInMs;

    const minutes = Math.trunc(leftMsWithoutHours / minInMs)
    const minIntegerInMs = minutes * minInMs;
    const leftMsWithoutMins = leftMsWithoutHours - minIntegerInMs;

    const seconds = Math.trunc(leftMsWithoutMins / 1000);
    return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
};
getDiff(date1, date2)

console.log(getDiff(date1, date2));