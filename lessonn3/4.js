'use strict';
/*
    4. * Нарисовать пирамиду с помощью console.log,
    как показано на рисунке, только у вашей пирамиды
    должно быть 20 рядов, а не 5:
    x
    xx
    xxx
    xxxx
    xxxxx
*/
const symbol = 'x';
const rowsCount = 20;

for (let i = 0, text = ''; i < rowsCount; i++) {
    text += symbol;
    console.log(text);
}