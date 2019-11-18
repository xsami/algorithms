// http://codeforces.com/problemset/problem/1257/A

package main

import (
	"fmt"
	"math"
)

func getMaxDist(n, x, a, b int) int {
	
	var maxDist, bToBegin, aToEnd, sumSpace int

	maxDist = int(math.Abs(float64(a - b))) // Calculate current distance
	bToBegin = int(math.Abs(float64(b - 1))) // Distance between b and 1 (first position)
	aToEnd = int(math.Abs(float64(n - a))) // Distance between a and the last element
	sumSpace = aToEnd + bToBegin // Adding all the distances

	if sumSpace <= x {
		return n - 1
	}

	maxDist += x

	return maxDist
}

func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Min(a, b int) int {
	if a < b {
		return a
	}
	return b
}	

func main() {

	var t, n, x, a, b int

	fmt.Scanf("%d", &t)

	for t > 0 {
		t--
		fmt.Scanf("%d%d%d%d", &n, &x, &a, &b)

		fmt.Println(getMaxDist(n, x, Max(a, b), Min(a, b)))
	}

}