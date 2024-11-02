// solution for: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
function binarySearch(list, target, direction) {
    
    let low = 0;
    let high = list.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);
        const midElement = list[mid];

        if (midElement > target) { 
            high = mid - 1;
        } else if (midElement < target) {
            low = mid + 1;
        } else {
            // don't end the loop and let's keep search for the "direction" most element
            result = mid;
            if (direction > 0) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }
    return  result;
}



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    // get left most target in nums
    const left = binarySearch(nums, target, -1);
    const right = binarySearch(nums, target, 1);

    return [left, right];
};