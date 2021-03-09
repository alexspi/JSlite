'use strict';
/*
    3.* Подумать над глобальными сущностями.
    К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
    Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
    но в разных местах давал возможность вызывать разные методы.
*/
class Product {
    constructor({title, discount, price, color, image }) {
      this.title = title;
      this.discount = discount;
      this.price = price;
      this.image = image;
      this.color = color;
    }

    // Есть ли скидка на товар?
    hasDiscount() {
        return Boolean(this.discount);
    }

    // Возвращает размер скидки
    getDiscount() {
        return this.discount;
    }

    // Устанавливает скидку на товар
    setDiscount(discount) {
        this.discount = discount;
    }
 
    // Возвращает цену товара
    getPrice() {
        return this.price;
    };

    // Возвращает цену с учетом скидки
    getTotalPrice() {
        return this.discount ? this.price * (100 - this.discount) / 100 : this.price;
    };
  
};

const luggage = new Product({
    title: 'Чемодан',
    discount: 0,
    price: 2000,
    color: 'Красный',
    image: 'http://luggageimages.com/red.png'
});

luggage.setDiscount(20);

console.log(`Чемодан со скидкой ${luggage.getDiscount()}%!`);
console.log(`Всего за ${luggage.getTotalPrice()} рублей`);
