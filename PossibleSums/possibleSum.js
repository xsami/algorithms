// possible sum problem: https://app.codesignal.com/interview-practice/task/rMe9ypPJkXgk3MHhZ/description
let sumMap;

function recursiveSum(coins, quantity, index, quantityIndex, currentSum) {
    if (quantityIndex == quantity[index]) {
        return;
    }
    
    currentSum += coins[index];
    
    if (!sumMap[currentSum]) {
        sumMap[currentSum] = 1;
    } else {
        sumMap[currentSum]++;
    }
    
    for (let i = index + 1; i < coins.length; i++) {
           recursiveSum(coins, quantity, i, 0, currentSum);
    }
    
    recursiveSum(coins, quantity, index, quantityIndex + 1, currentSum);
}

function possibleSums(coins, quantity) {
    sumMap = {};
    for (let i = 0; i < coins.length; i++) {
        recursiveSum(coins, quantity, i, 0, 0);
    }
    return Object.keys(sumMap).length;
}
