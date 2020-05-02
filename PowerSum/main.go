package main

// Phoenix and Balance problem from Codeforces.com
// http://codeforces.com/problemset/problem/1348/A

import (
	"fmt"
	"math"
)

func powerSum(n int) int64 {

	var res int64
	res = 0
	halfN := n / 2

	for i := 0; i < halfN; i++ {
		res += int64(math.Pow(2, float64(i+1)))
	}

	return res

}

func main() {
	var t int
	var n int
	for fmt.Scanf("%d", &t); t > 0; t-- {
		// fmt.Scanf("%d", &n);  // cause codeforce looks to be reading two values uncomment this scan.
		fmt.Scanf("%d", &n);
		fmt.Println(powerSum(n));
	}
}