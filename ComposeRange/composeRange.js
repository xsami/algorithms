// Solution for problem: https://app.codesignal.com/interview-practice/task/cHYqbQ9DiWmejAdeG/

// Given a sorted integer array that does not contain any duplicates, return a summary of the number ranges it contains.

// Example

// For nums = [-1, 0, 1, 2, 6, 7, 9], the output should be
// composeRanges(nums) = ["-1->2", "6->7", "9"].


function getRanges(nums, result, index, prevValue, lvl) {
    if (index >= nums.length) {
        return;
    }
    
    if (nums[index] != (prevValue + 1)) {
        if (prevValue != result[lvl][0]){
            result[lvl].push(prevValue);
        }
        result.push([nums[index]]);
        return getRanges(nums, result, index + 1, nums[index], lvl + 1);
    } else if ((index + 1) == nums.length && nums.length > 1) {
        result[lvl].push(nums[index]);
        lvl++;
    }
    
    return getRanges(nums, result, index + 1, nums[index], lvl);
}

function composeRanges(nums) {
    
    const result = [];
    result.push([nums[0]]);
    
    getRanges(nums, result, 1, nums[0], 0);
    
    return result.map(element => element.join("->")).filter(element => element != "");
}
