package main

// Solution for problem: https://codeforces.com/problemset/problem/1355/A
// TODO: Change to BigInt

import (
	"fmt"
)

func max(a, b int) int {
	if (a > b ) { return a }
	return b
}

func min(a, b int) int {
	if (a < b ) { return a }
	return b
}

func getDigit(number int, dec bool) int {
	var result, digit int
	if (dec) {
		result = 9
	} else {
		result = 0
	}
	for number > 0 {
		digit = number % 10
		number /= 10
		if (dec) {
			result = min(digit, result)
		} else {
			result = max(digit, result)
		}
	}
	return result
}

func getSequenceDigit(a, k int) int {
	result := a
	for i := 1; i < k; i++ {
		result = result + getDigit(result, true) * getDigit(result, false)
	}
	return result
}

func main() {

	var t, a, k int
	
	for fmt.Scanf("%d\n", &t); t > 0; t-- {
		fmt.Scanf("%d %d\n", &a, &k);
		fmt.Println(getSequenceDigit(a, k));
	}
}
