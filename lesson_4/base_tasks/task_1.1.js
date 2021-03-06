/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования 
-> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. 
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. 
Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, 
и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/
'use strict'

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25
    }
}

let prod1 = new Product('MacBook', 1500);
prod1.make25PercentDiscount();


function Product_2(name, price) {
    this.name = name
    this.price = price

    Product_2.prototype.make25PercentDiscount = function () {
        this.price = this.price - this.price * 0.25
    }
}

let prod2 = new Product_2('MacBook', 1500);
prod2.make25PercentDiscount();