'use strict';

const format = function (numbers, col) {
    var slots = new Array(col).fill(0);
    var result = "";
    numbers.forEach(function(item, i, arr) {
        if (item.toString().length > slots[i % col]) {
            slots[i % col] = item.toString().length;
        }
    });

    numbers.forEach(function(item, i, arr) {
        result = result + ' '.repeat(slots[i % col] - item.toString().length) + item;
        if (i != numbers.length - 1) {
            if ((i + 1) % col == 0) {
                result = result + '\n';
            } else {
                result = result + ' ';
            }
        }
    });
    return result;
}
