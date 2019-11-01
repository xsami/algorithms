package main

import "fmt"

// Node is a simple implementation of a node structure
type Node struct {
	Next  *Node
	Value interface{}
}

func (n *Node) find(val interface{}) (int, error) {

	cur := n
	i := 0

	for {
		if cur == nil {
			break
		}

		if cur.Value == val {
			return i, nil
		}

		cur = cur.Next
		i++
	}

	return -1, fmt.Errorf("Element not found")
}

func (n *Node) insert(val interface{}) {

	cur := n

	for {
		if cur.Next == nil {
			break
		}
		cur = cur.Next
	}

	cur.Next = &Node{
		Value: val}

}

// TODO: Enhance for i < val
func (n *Node) delete(val interface{}) (int, error) {

	if idx, err := n.find(val); err != nil {
		return idx, err
	}

	i := 0
	cur := n

	if cur.Value == val {
		cur = &Node{}
		return 0, nil
	}

	for {

		if cur.Next == nil {
			break
		}

		if cur.Next.Value == val {

			if cur.Next.Next != nil {
				cur.Next = cur.Next.Next
			} else {
				cur.Next = nil
			}

			return i, nil
		}

		cur = cur.Next
		i++
	}
	return -1, fmt.Errorf("Something wrong happened")
}

func main() {

	myNode := &Node{
		Value: 1}
	myNode.insert(2)
	myNode.insert(3)
	myNode.insert(4)
	myNode.insert(5)
	myNode.insert(6)

	if idx, err := myNode.find(3); err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("Index: %v\n", idx)
	}

	myNode.delete(3)

	if idx, err := myNode.find(3); err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("Index: %v\n", idx)
	}

	fmt.Println("Hello World")
}
