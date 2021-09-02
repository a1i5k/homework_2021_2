'use strict';

/**
 * Проверяет явлется ли аргумент числом
 *
 * @param {*} element - проверяемый элемент
 * @returns {boolean}
 */

const checkElementArray = (element) => {
    if (typeof(element) !== 'number') {
        return true;
    }
}

/**
 * Форматирует переданные целые числа в несколько колонок. Числа в получившейся таблице идут слева направо, сверху вниз
 *
 * @param {number[]} numbers - массив чисел, которые надо отформатировать
 * @param {number} col - количество колонок
 * @returns {string}
 */

const format = (numbers, col) => {
    if (!Number.isInteger(col) || col <= 0) {
        throw new Error('Number of columns must be greater than 0');
    }

    if (!Array.isArray(numbers)) {
        throw new Error('Numbers must only array');
    }

    if (numbers.some((element) => checkElementArray(element))) {
        throw new Error('Elements of array must be number');
    }

    const slots = numbers.reduce((acc, currentValue, index) => {
        const indexCol = index % col;
        const lenNumber = currentValue.toString().length;
        if (lenNumber >  acc[indexCol]) {
            acc[indexCol] = lenNumber;
        }
        return acc;
    }, new Array(col).fill(0));

    return numbers.reduce((acc, currentValue, index) =>  {
        acc = acc + currentValue.toString().padStart(slots[index % col]);
        if (index !== numbers.length - 1) {
            const endlineSymbol = (index + 1) % col === 0 ? '\n' : ' ';
            return acc + endlineSymbol;
        } else {
            return acc;
        }
    }, '');
}

