const results = [];

function getLongestSubArray(s, arr, curIndex, firstIndex) {
    
    if (curIndex >= arr.length) {
        return;    
    }
    
    let currentSum = s - arr[curIndex];
    
    if (currentSum > 0) {
        return getLongestSubArray(currentSum, arr, curIndex + 1, firstIndex);
    }
    else if (currentSum < 0) {
        return getLongestSubArray(s + arr[firstIndex], arr, curIndex, firstIndex + 1);
    } else {
        results.push([firstIndex + 1, curIndex + 1]);
        
        return getLongestSubArray(currentSum, arr, curIndex + 1, firstIndex);
    }
    
    return -1;
}

function getMaxDistance(arr) {
    let res = [-1];
    arr.forEach(element => {
       if (res === [-1]) {
           res = element;
       } else {
           res = (res[1] - res[0]) > (element[1] - element[0]) ? res : element;
       }
    });
    return res;
}

function findLongestSubarrayBySum(s, arr) {
    
    getLongestSubArray(s, arr, 0, 0);
    return getMaxDistance(results);
}
