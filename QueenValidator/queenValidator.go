package main

import "fmt"

var FREE, TAKEN, VISITED, NOTVISITED, GOAL byte

var memo [][]byte

type Position struct {
	X int // This is the width position
	Y int // This is the heigth position
}

// This function will fill a matrix with the value sent
func memset(matrix [][]byte, value byte) {
	for i, slice := range matrix {
		for j, _ := range slice {
			matrix[i][j] = value
		}
	}
}

// TODO: Make an enhacement to implement memoization on this problem. Too many recursion calls
func canBeQueen2(matrix [][]byte, currentPosition Position, prevPosition Position, end int) bool {

	prevColumn := currentPosition.X - 1
	currentRow := currentPosition.Y
	currentColumn := currentPosition.X
	nextRow := currentPosition.Y + 1
	nextColumn := currentPosition.X + 1

	// Validate the currentPosition, 0 or > len(matrix) must return false
	if currentRow < 0 || currentRow >= len(matrix) {
		return false
	}
	if currentColumn < 0 || currentColumn >= len(matrix[currentRow]) {
		return false
	}

	// Validate current position, with an obstacle
	if matrix[currentRow][currentColumn] == TAKEN && currentColumn != prevPosition.X {
		if currentRow != prevPosition.Y { // Validate this isn't the start position
			memo[currentRow][currentColumn] = VISITED
			return false
		}
	}

	// Validate if you came from Up and the current position is Free
	if matrix[currentRow][currentColumn] == FREE && currentColumn == prevPosition.X {
		if currentRow != prevPosition.Y { // Validate this isn't the start position
			memo[currentRow][currentColumn] = VISITED
			return false
		}
	}

	// return true if you did hit the last row in a safe place
	if currentRow == end {
		memo[currentRow][currentColumn] = GOAL
		return true
	}

	// Go to the rigth
	// if val := memo[nextRow][nextColumn]; val == NOTVISITED {
	if canBeQueen2(matrix, Position{X: nextColumn, Y: nextRow}, currentPosition, end) {
		memo[currentRow][currentColumn] = GOAL
		return true
	}
	// }
	// Go to the left
	if canBeQueen2(matrix, Position{X: prevColumn, Y: nextRow}, currentPosition, end) {
		memo[currentRow][currentColumn] = GOAL
		return true
	}
	// Go down
	if canBeQueen2(matrix, Position{X: currentPosition.X, Y: nextRow}, currentPosition, end) {
		memo[currentRow][currentColumn] = GOAL
		return true
	}

	// Didn't became Queen
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
 *      3. You can start in any position between 0 and width (Don't validate obstacle)
 *      4. You can start in any position between 0 and heigth (Don't validate obstacle)
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

	FREE, TAKEN, VISITED, NOTVISITED, GOAL = 0, 1, 1, 0, 2

	table := [][]byte{
		{FREE, FREE, FREE, FREE, FREE, TAKEN, FREE},
		{FREE, FREE, FREE, TAKEN, FREE, FREE, FREE},
		{FREE, FREE, TAKEN, TAKEN, FREE, FREE, FREE},
		{TAKEN, FREE, FREE, FREE, FREE, TAKEN, FREE},
		{FREE, FREE, FREE, TAKEN, FREE, FREE, FREE},
		{TAKEN, FREE, TAKEN, FREE, FREE, FREE, TAKEN}}

	memo = table[:] // create a table copy
	memset(memo, NOTVISITED)

	begin := Position{
		X: 0,
		Y: 0}

	fmt.Printf("The Pawn starting at the position:\n%+v\n"+
		"Using the following table:\n%+v\nCan become a Queen? %v",
		begin, memo, canBeQueen(table, begin))

}
