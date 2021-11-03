/*
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, 
можете использовать метод forEach https://mzl.la/1AOMMWX :
*/
'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

/**
 * Функция скидки
 * @param {Array} products каталог товаров 
 * @param {number} size размер скидки
 * @returns {Array} измененный каталог
 */

function discount(products, size) {
    for (let i = 0; i < products.length; i++) {
        products[i].price = products[i].price - products[i].price * size / 100
    }
}

discount(products, 15)
console.log(products)