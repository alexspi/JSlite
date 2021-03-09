'use strict';
/*
    2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
    Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS: 
    - Пустая корзина должна выводить строку «Корзина пуста»;
    - Наполненная должна выводить «`В корзине: n товаров на сумму m рублей`».
*/

// Создаем корзину с товарами
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
    },

    getItems() {
        return this.items;
    }
};

basket.addItem(productOne);
basket.addItem(productTwo);
basket.addItem(productThree);

const basketItems = basket.getItems();
const itemsCount = basketItems.length; 
const basketTotalSum = basket.getTotalSum();
const message = itemsCount > 0
    ? `В корзине: ${itemsCount} товарa на сумму ${basketTotalSum} рублей`
    : 'Корзина пуста';

const cartContainerEl = document.querySelector('.cart');
let cartMessageEl = document.createElement('p');
cartMessageEl.innerHTML = message;
cartContainerEl.appendChild(cartMessageEl);
