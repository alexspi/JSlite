'use strict';
/*
    1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
let i = 0;
let simpleNumbers = [];

while (i < 100) {
    i++;

    if (i === 1) continue;

    let j = 0;
    let isSimple = true;

    while (j < i) {
        j++;

        // Делится ли число на другие числа
        let isDividedToAnotherNums =  i % j === 0;
 
        // Признак простого числа – число делится само на себя
        // Нужно исключить
        let isNotTheSameNumber = i !== j;

        // Признак простого числа – делится на 1
        // Нужно исключить
        let isMoreThanOne = j > 1;


        if (isDividedToAnotherNums && isNotTheSameNumber && isMoreThanOne) {
            isSimple = false;
            break;
        }
    }
    if (isSimple){
        simpleNumbers.push(i)
    }
}

console.log('Все простые числа в промежутке от 0 до 100: ', simpleNumbers);