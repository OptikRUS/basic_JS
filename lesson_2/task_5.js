'use strict'
/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции (использовать switch) выполнить одну из 
арифметических операций (использовать функции из задания 4) и вернуть полученное значение.
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

/**
 * Функция простого калькулятора
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation - операция
 * @returns {number} результат операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'summ':
            return summ(arg1, arg2);
        case 'sub':
            return sub(arg1, arg2);
        case 'div':
            return div(arg1, arg2);
        case 'mul':
            return mul(arg1, arg2);
    }
}

let a = parseInt(prompt('Введите значение a: '));
let b = parseInt(prompt('Введите значение b: '));
let oper = prompt('Введите операцию\nsumm - сложение\nsub - вычитание\ndiv - деление\nmul - умножение')

alert(mathOperation(a, b, oper))