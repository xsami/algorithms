// Solution for: https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    
    const sortedCoins = piles.sort((a, b) => b - a);
    const bobCoins = piles.length / 3;
    let result = 0;

    for (let i = 0, flag = false; i < piles.length - bobCoins; i++, flag = !flag) {
        if (flag) {
            result += sortedCoins[i];
        }
    }

    return result;
};