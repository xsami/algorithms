/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    const split_number  = (n + "").split('');
    const result  = [];
    let block = []
    for (let i = split_number.length - 1, c = 0; i >= 0; c++, i--) {
        if (c % 3 === 0) {
            result.push(block)
            block = [];
        }
        block.push(split_number[i]);
    }

    return result.map(b => b.reverse().join('')).join('.');

};