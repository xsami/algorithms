/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    const getSortedBST = function(list, left, right) {
        if(left > right) return null;

        const mid = Math.floor((left + right) / 2);

        return new TreeNode(list[mid], getSortedBST(list, left, mid - 1), getSortedBST(list, mid + 1, right))
    }

    return getSortedBST(nums, 0, nums.length - 1)
};