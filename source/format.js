'use strict';

/**
  * Форматирует переданные целые числа в несколько колонок. Числа в получившейся таблице идут слева направо, сверху вниз
  * 
  * @param {array number} numbers - массив чисел, которые надо отформатировать
  * @param {integer number} col - количество колонок
  * @returns {string}
  */

const format = function (numbers, col) {
    if (!Number.isInteger(col) || col <= 0) {
        return null;
    }

    if (!Array.isArray(numbers)) {
        return null;
    }

    let slots = new Array(col).fill(0);

    for(let i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i]) == 'string')
            return null;
    }

    numbers.reduce(function(previousValue, currentValue, index) {
        if (index == 1) {
            slots[(index - 1) % col] = previousValue.toString().length;
        }

        if (currentValue.toString().length > slots[index % col]) {
            slots[index % col] = currentValue.toString().length;
        }
    });

    return numbers.reduce(function(previousValue, currentValue, index) {
        if (index == 1) {
            if (index % col == 0) {
                previousValue = ' '.repeat(slots[(index - 1) % col] - previousValue.toString().length) + previousValue + '\n';
            } else {
                previousValue = ' '.repeat(slots[(index - 1) % col] - previousValue.toString().length) + previousValue + ' ';
            }
        }

        if (index != numbers.length - 1) {
            if ((index + 1) % col == 0) {
                return previousValue + ' '.repeat(slots[index % col] - currentValue.toString().length) + currentValue + '\n';
            } else {
                return previousValue + ' '.repeat(slots[index % col] - currentValue.toString().length) + currentValue + ' ';
            }
        } else {
            return previousValue + ' '.repeat(slots[index % col] - currentValue.toString().length) + currentValue
        }
    });
}

