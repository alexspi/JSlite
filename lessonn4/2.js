'use strict';
/*
    2. Продолжить работу с интернет-магазином:
    a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    b. Реализуйте такие объекты.
    c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const productOne = {
    id: 1,
    price: 1000,
    title: 'Сумка'
};

const productTwo = {
    id: 2,
    price: 500,
    title: 'Кошелек'
};

const productThree = {
    id: 3,
    price: 300,
    title: 'Обложка для паспорта'
};

const basket = {
    items: [],

    addItem(item) {
        this.items.push(item);
    },

    getTotalSum() {
        let totalSum = 0;

        this.items.forEach(item => {
            totalSum += item.price;
        });

        return totalSum; 
    }
};

basket.addItem(productOne);
basket.addItem(productTwo);
basket.addItem(productThree);

console.log('Общая стоимость товаров в корзине: ', basket.getTotalSum());