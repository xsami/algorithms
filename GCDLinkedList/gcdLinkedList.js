// Solution for: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a%b);

    let curNode = head;

    while (curNode?.next) {
        const nextNode = curNode.next;
        const curVal = curNode.val;
        const nextVal = nextNode.val;

        const divisor = gcd(curVal, nextVal);

        curNode.next = new ListNode(divisor, nextNode);

        curNode = nextNode;
    }

    return head;
};