'use strict';
/*
    1. Написать функцию, преобразующую число в объект.
    Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
    в котором в соответствующих свойствах описаны единицы, десятки и сотни.
    Например, для числа 245 мы должны получить следующий объект:
    {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
    Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function getDigitsOfNumber(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Значение аргумента должно быть целым числом в диапазоне от 0 до  999');
        return {};
    }

    return {
        'единицы': num % 10,
        'десятки': Math.floor(num / 10) % 10,
        'сотни': Math.floor(num / 100)
    };
}

console.log(getDigitsOfNumber(597));