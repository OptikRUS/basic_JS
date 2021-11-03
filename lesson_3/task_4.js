/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
    2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ, 
как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
*/
'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

/**
 * Функция фильтрации изображений
 * @param {Array} arr массив, который нужно отфильтровать
 * @returns массив с id товаров с изображениями
 */

function image(arr) {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        if (products[i].photos) {
            if (products[i].photos.length != 0) {
                new_arr.push(products[i].id)
            }

        }

    }
    return new_arr

}

console.log(image(products))


products.sort(function (product1, product2) {
    if (product1.price < product2.price) {
        return -1;
    }
    if (product1.price > product2.price) {
        return 1;
    }
    return 0;
});

console.log(products)