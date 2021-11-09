/*
Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
'use strict'

class SplitNum {
    constructor(number) {
        if (Number(number) === number && number % 1 === 0 || number > 0 || number < 999) {
            var digits = [];
            for (let i = 0; i < 3; i++) {
                if (number % 10) {
                    digits.push(number % 10);
                    number = Math.floor(number / 10);
                }
                else {
                    digits.push(0)
                }
            }
            this.units = digits[0]
            this.tens = digits[1]
            this.hundreds = digits[2]
        }
        else {
            console.log('Введите целое число в диапазоне [0, 999]')
        }

    }
}

let digits = new SplitNum(45)
console.log(digits.units)
console.log(digits.tens)
console.log(digits.hundreds)