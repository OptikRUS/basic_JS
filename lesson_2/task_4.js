'use strict'
/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. 
Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.
*/

/**
 * Функция сложения чисел
 * @param {number} num_1 первое число
 * @param {number} num_2 второе число
 * @returns {number} сумма чисел
 */
function summ(num_1, num_2) {
    return num_1 + num_2
}

/**
 * Функция вычитания чисел
 * @param {number} num_1 первое число
 * @param {number} num_2 второе число
 * @returns {number} разность чисел
 */
function sub(num_1, num_2) {
    return num_1 - num_2
}

/**
 * Функция деления чисел
 * @param {number} num_1 первое число
 * @param {number} num_2 второе число
 * @returns {number} частное чисел
 */
function div(num_1, num_2) {
    return num_1 / num_2
}

/**
 * Функция умножения чисел
 * @param {number} num_1 первое число
 * @param {number} num_2 второе число
 * @returns {number} произведение чисел
 */
function mul(num_1, num_2) {
    return num_1 * num_2
}

let a = parseInt(prompt('Введите значение a: '));
let b = parseInt(prompt('Введите значение b: '));

alert(`Сумма чисел:${summ(a, b)}\nРазность чисел:${sub(a, b)}\nЧастное чисел:${div(a, b)}\nПроизведение чисел:${mul(a, b)}`)