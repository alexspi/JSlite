'use strict';
/*
    2. С этого урока начинаем работать с функционалом интернет-магазина.
    Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
    стоимости корзины в зависимости от находящихся в ней товаров.
    Товары в корзине хранятся в массиве.
    Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

const productOne = {
    id: 1,
    price: 1000
};

const productTwo = {
    id: 2,
    price: 500
};

const productThree = {
    id: 3,
    price: 300
};

const basket = [
    productOne,
    productTwo,
    productThree
];

function countBasketPrice(basketItems) {
    let totalSum = 0;

    basketItems.forEach(item => {
        totalSum += item.price;
    });

   return totalSum; 
};

console.log('Общая стоимость товаров в корзине: ', countBasketPrice(basket));