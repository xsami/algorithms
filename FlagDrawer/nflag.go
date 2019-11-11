package main

import (
	"fmt"
	"strings"
)

func cJoin(arr []string, emptyValue string) string {
	for i, value := range arr {
		if value != "*" {
			arr[i] = emptyValue
		}
	}
	return strings.Join(arr, "")
}

func buildArr(arrlen int, evaluator func(index int) bool) []string {

	res := make([]string, arrlen)
	for i := 0; i < arrlen; i++ {
		if evaluator(i) {
			res[i] = "*"
		}
	}
	return res
}

func buildNazi(n int) {

	if n < 1 {
		fmt.Println("Invalid Size")
		return
	}

	baseHeigth := 3 + n*2
	halfHeigth := baseHeigth / 2
	baseWidth := 5 + n*2
	halfWidth := baseWidth / 2
	var asList []string

	for i := 0; i < baseHeigth; i++ {

		if i == halfHeigth {
			asList = buildArr(baseWidth, func(index int) bool { return true })
		} else if i == 0 {
			asList = buildArr(baseWidth, func(index int) bool {
				return index == 0 || index >= halfWidth
			})
		} else if i == (baseHeigth - 1) {
			asList = buildArr(baseWidth, func(index int) bool {
				return index == (baseWidth-1) || index <= halfWidth
			})
		} else {
			asList = buildArr(baseWidth, func(index int) bool {
				if i < halfHeigth {
					return index == 0 || index == halfWidth
				}
				return index == halfWidth || index == (baseWidth-1)
			})
		}

		fmt.Println(cJoin(asList, " "))
	}
}

func main() {
	var n int
	fmt.Scanf("%d", &n)

	buildNazi(n)
}

// *  ****
// *  *
// *******
//    *  *
// ****  *
