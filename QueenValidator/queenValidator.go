package main

import "fmt"

var FREE, TAKEN byte

type Position struct {
	X int // This is the width position
	Y int // This is the heigth position
}

// TODO: Make an enhacement to implement memoization on this problem. Too many recursion calls
func canBeQueen2(matrix [][]byte, currentPosition Position, prevPosition Position, end int) bool {

	// Validate the currentPosition, 0 or > len(matrix) must return false
	if currentPosition.Y < 0 || currentPosition.Y >= len(matrix) {
		return false
	}
	if currentPosition.X < 0 || currentPosition.X >= len(matrix[currentPosition.Y]) {
		return false
	}

	// Validate current position, with an obstacle
	if matrix[currentPosition.Y][currentPosition.X] == TAKEN && currentPosition.X != prevPosition.X {
		return false
	}
	// Validate if you came from Up and the current position is Free
	if matrix[currentPosition.Y][currentPosition.X] == FREE && currentPosition.X == prevPosition.X {
		return false
	}

	// return true if you did hit the last row in a safe place
	if currentPosition.Y == end {
		return true
	}

	// Go to the rigth
	if canBeQueen2(matrix, Position{X: currentPosition.X + 1, Y: currentPosition.Y + 1}, currentPosition, end) {
		return true
	}
	// Go to the left
	if canBeQueen2(matrix, Position{X: currentPosition.X - 1, Y: currentPosition.Y + 1}, currentPosition, end) {
		return true
	}
	// Go down
	if canBeQueen2(matrix, Position{X: currentPosition.X, Y: currentPosition.Y + 1}, currentPosition, end) {
		return true
	}

	return false
}

/**
 * The rules are simple: make a function that return true or false
 * if a element startinng at position x, y can convert into a Queen.
 * The goal to convert into a Queen is to reach from position {start}
 * to the last position (the last row in the table).
 *
 * Allowed moves:
 * 		1. Move in diagonal down level
 *      2. Eat the obstacles down level
 *
 * Not allowed moves:
 *		1. You cannot go up level
 *      2. You cannot move in diagonal if there is an obstacle
 *
 * NOTE: Free spaces are denoted by: 0, and obstacles are denoted by: 1
 */
func canBeQueen(matrix [][]byte, start Position) bool {
	return canBeQueen2(matrix, start, start, len(matrix)-1)
}

func main() {

	FREE, TAKEN = 0, 1

	table := [][]byte{
		{FREE, FREE, FREE, FREE, FREE, TAKEN, FREE},
		{FREE, FREE, FREE, TAKEN, FREE, FREE, FREE},
		{FREE, FREE, TAKEN, TAKEN, FREE, FREE, FREE},
		{TAKEN, FREE, FREE, FREE, FREE, TAKEN, FREE},
		{FREE, FREE, FREE, TAKEN, FREE, FREE, FREE},
		{TAKEN, FREE, TAKEN, FREE, FREE, FREE, TAKEN}}

	begin := Position{
		X: 0,
		Y: 0}

	fmt.Printf("The Pawn starting at the position:\n%+v\n"+
		"Using the following table:\n%+v\nCan become a Queen? %v",
		begin, table, canBeQueen(table, begin))

}
