// Solution for problem: https://app.codesignal.com/challenge/XDFFwxLCs52YeJb9H

// Note: Your solution should have O(n) time complexity, where n is the number of elements in l, since this is what you will be asked to accomplish in an interview.

// You have a singly linked list l, which is sorted in strictly increasing order, and an integer value. Add value to the list l, preserving its original sorting.

// Note: in examples below and tests preview linked lists are presented as arrays just for simplicity of visualization: in real data you will be given a head node l of the linked list

// Example

// For l = [1, 3, 4, 6] and value = 5, the output should be
// insertValueIntoSortedLinkedList(l, value) = [1, 3, 4, 5, 6];
// For l = [1, 3, 4, 6] and value = 10, the output should be
// insertValueIntoSortedLinkedList(l, value) = [1, 3, 4, 6, 10];
// For l = [1, 3, 4, 6] and value = 0, the output should be
// insertValueIntoSortedLinkedList(l, value) = [0, 1, 3, 4, 6].

package SLinkedList

// Singly-linked lists are already defined with this interface:
// type ListNode struct {
//   Value interface{}
//   Next *ListNode
// }
//

func insertValueIntoSortedLinkedList(l *ListNode, value int) *ListNode {

	if l == nil {
		return &ListNode{Value: value}
	} else if l.Value.(int) >= value {
		return &ListNode{Value: value, Next: l}
	}

	element := l
	for element.Next != nil {
		if element.Next != nil && element.Next.Value.(int) >= value {
			tmpNode := element.Next
			element.Next = &ListNode{Value: value}
			element.Next.Next = tmpNode
			return l
		}
		element = element.Next
	}
	element.Next = &ListNode{Value: value}

	return l
}
