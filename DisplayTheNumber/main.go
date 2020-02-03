// http://codeforces.com/problemset/problem/1295/A
package main

import (
	"fmt"
	"strings"
)

func FindNumber(segments int32) string {
	res := make([]string, 0, 100)
	ones := int(segments) / 2
	sevens := int(segments) % 2

	if sevens == 1 {
		ones -= 1
	}

	for i := 0; i < sevens; i++ {
		res = append(res, "7")
	}

	for i := 0; i < ones; i++ {
		res = append(res, "1")
	}

	return strings.Join(res, "")
}

func main() {
	var t, n int32

	fmt.Scanf("%d\n", &t)

	for i := int32(0); i < t; i++ {
		fmt.Scanf("%v\n", &n)
		fmt.Printf("%v\n", FindNumber(n))
	}
}