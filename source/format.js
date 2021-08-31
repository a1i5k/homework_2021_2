'use strict';

/**
  * Форматирует переданные целые числа в несколько колонок. Числа в получившейся таблице идут слева направо, сверху вниз
  * 
  * @param {Array} numbers - массив чисел, которые надо отформатировать
  * @param {number} col - количество колонок
  * @returns {string}
  */


const checkElementArray = (element) => {
    if (typeof(element) !== 'number') {
        return element;
    }
}

const format = (numbers, col) => {
    if (!Number.isInteger(col) || col <= 0) {
        throw new Error('Number of columns must be greater than 0');
    }

    if (!Array.isArray(numbers)) {
        throw new Error('Numbers must only array');
    }

    if (numbers.some((element) => { return checkElementArray(element); })) {
        throw new Error('Elements of array must be number');
    }

    const slots = numbers.reduce((acc, currentValue, index) => {
        const indexCol = index % col
        if (currentValue.toString().length > acc[indexCol]) {
            acc[indexCol] = currentValue.toString().length;
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

