// Solution for Angry Students problem
// Posted in Codeforces.com: http://codeforces.com/problemset/problem/1287/A
package main

import "fmt"

func getLongetSubSequence(str, chr string) int {
	result, counter := 0, 0
	angered := false
	for _, el := range str {
		if counter > result {
			result = counter
		}

		if string(el) == chr {
			if angered {
				counter++
			}
		} else {
			counter = 0
			angered = true
		}

	}

	if counter > result {
		result = counter
	}

	return result
}

func main() {

	var t, l int
	var students string
	fmt.Scanf("%d", &t)

	for i := 0; i < t; i++ {
		fmt.Scanf("%d\n%v", &l, &students)
		fmt.Println(getLongetSubSequence(students, "P"))
	}
}
