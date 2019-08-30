package main

import "fmt"

var NullObject = &Node{}

type Node struct {
	Next *Node
	Value interface{}
}

func (n *Node) find(val interface{}) (int, error) {
	
	cur := n
	i := 0
	
	for {
		if cur == NullObject {
			break
		}

		if cur.Value == val {
			return i, nil
		}

		cur = cur.Next
		i++
	}
	
	return -1, fmt.Errorf("Not founded")
}

func (n *Node) insert(val interface{}) {

	cur := n

	for {
		if cur.Next == NullObject {
			break
		}
		cur = cur.Next
	}

	cur.Next = &Node{
		Value: val}

}


func (n *Node) delete(val interface{}) (int, error) {
	
	if val, err := n.find(val); err != nil {
		return val, err
	}

	i := 0
	cur := n

	for {

		if cur.Next == NullObject {
			break
		}

		if cur.Next.Value == val {

			if cur.Next.Next != NullObject {
				cur.Next = cur.Next.Next
			} else {
				cur.Next = NullObject
			}

			return i, nil
		}

		cur = cur.Next
		i++
	}
	return -1, fmt.Errorf("Something wrong happened")
}


func main() {
	fmt.Println("Hello World")
}
