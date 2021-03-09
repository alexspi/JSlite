'use strict';
/*
    3. * Сделать так, чтобы товары в каталоге выводились при помощи JS: 
    - Создать массив товаров (сущность Product);
    - При загрузке страницы на базе данного массива генерировать вывод из него.
    HTML-код должен содержать только `div id=”catalog”` без вложенного кода.
    Весь вид каталога генерируется JS.
*/

const productOne = {
    id: 1,
    price: 1000,
    title: 'Сумка',
    image: 'https://static.ecco-shoes.ru/images/eshop/img/jpg/bigw/9105570_90418.jpg'
};

const productTwo = {
    id: 2,
    price: 500,
    title: 'Кошелек',
    image: 'https://static-sl.insales.ru/images/products/1/7275/91380843/koshelek-s-rfid-dun-wallet-05.jpg'
};

const productThree = {
    id: 3,
    price: 300,
    title: 'Обложка для паспорта',
    image: 'http://vipnotes.ru/UserFiles/Image/img333_74452_big.jpg'
};

const catalog = [
    productOne,
    productTwo,
    productThree 
];

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

function renderCart(basket) {
    const basketItems = basket.getItems();
    const itemsCount = basketItems.length; 
    const basketTotalSum = basket.getTotalSum();
    const message = itemsCount > 0
        ? `В корзине: ${itemsCount} товарa(ов) на сумму ${basketTotalSum} рублей`
        : 'Корзина пуста';
    
    const cartContentEl = document.querySelector('.cart-content'); 

    if (!cartContentEl) {
        const cartContainerEl = document.querySelector('.cart');
        let cartMessageEl = document.createElement('p');
        cartMessageEl.innerHTML = message;
        cartMessageEl.classList.add('cart-content');
        cartContainerEl.appendChild(cartMessageEl); 
    } else {
        cartContentEl.innerHTML = message;
    }
}

renderCart(basket);

function prepareCatalog(catalog, basket) {
    const catalogContainerEl = document.querySelector('.catalog');
    catalog.forEach((item) => {
        const containerEl = document.createElement('div');
        containerEl.classList.add('item');

        const titleEl = document.createElement('h2');
        titleEl.innerText = item.title;
        containerEl.appendChild(titleEl); 

        const priceEl = document.createElement('p');
        priceEl.innerText = `Цена: ${item.price} рублей`;
        containerEl.appendChild(priceEl); 

        const imageEl = document.createElement('img');
        imageEl.src = item.image;
        imageEl.alt = item.title;
        imageEl.classList.add('image');
        containerEl.appendChild(imageEl); 

        const buttonEl = document.createElement('button'); 
        buttonEl.innerText = 'Добавить в корзину';
        buttonEl.addEventListener('click', () => {
            basket.addItem(item);
            renderCart(basket);
        });
        containerEl.appendChild(buttonEl); 



        catalogContainerEl.appendChild(containerEl);
    })
}

prepareCatalog(catalog, basket);
