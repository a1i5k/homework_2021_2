'use strict';

/**
  * Форматирует переданные целые числа в несколько колонок. Числа в получившейся таблице идут слева направо, сверху вниз
  * 
  * @param {Array} numbers - массив чисел, которые надо отформатировать
  * @param {number} col - количество колонок
  * @returns {string}
  */

const format = (numbers, col) => {
    if (!Number.isInteger(col) || col <= 0) {
        throw new Error('Number of columns must be greater than 0');
    }

    if (!Array.isArray(numbers)) {
        throw new  Error('Numbers must only array');
    }

    if (numbers.some(function(element) {
            if (typeof(element) == 'string')
                return element;
       })) {
       throw new  Error('Elements of array must be number');
    }

    const slots = numbers.reduce(function(acc, currentValue, index) {
        if (currentValue.toString().length > acc[index % col]) {
            acc[index % col] = currentValue.toString().length;
        }
        return acc;
    }, new Array(col).fill(0));

    return numbers.reduce(function(acc, currentValue, index) {
        const newAcc = acc + currentValue.toString().padStart(slots[index % col]);
        if (index !== numbers.length - 1) {
            return newAcc + ((index + 1) % col === 0 ? '\n' : ' ');
        } else {
            return newAcc;
        }
    }, '');
}

