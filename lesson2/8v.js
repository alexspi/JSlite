'use strict';
/*
    * С помощью рекурсии организовать функцию возведения числа в степень.
    Формат: function power(val, pow),
    где val – заданное число, pow – степень.
*/

function power(val, pow) {
    if (pow === 1) {
        return val;
    }
    return val * power(val, pow - 1);
};

console.log(`2 в степени 3 = ${power(2, 3)}`); // 2 * 2 * 2
console.log(`3 в степени 4 = ${power(3, 4)}`); // 3 * 3 * 3 * 3
console.log(`2 в степени 6 = ${power(2, 6)}`); // 2 * 2 * 2 * 2 * 2 * 2 