package main

import (
	"fmt"
)

func decompose(number int) []int {

	res := []int{}

	for number > 0 {
		res = append(res, number%10)
		number /= 10
	}
	return res
}

func getCarried(max, min []int) int {

	counter := 0
	carried := 0
	var sum int
	for i := 0; i < len(max); i++ {
		if i < len(min) {
			sum = min[i] + max[i] + carried
		} else {
			sum = max[i] + carried
		}
		carried = sum / 10
		if carried > 0 {
			counter++	
		}
	}
	return counter

}

func numberOfCarryOperations(a, b int) int {

	da := decompose(a)
	db := decompose(b)

	la := len(da)
	lb := len(db)

	if la > lb {
		return getCarried(da, db)
	}

	return getCarried(db, da)
}

func main() {

	fmt.Println(numberOfCarryOperations(123, 456))     // 0
	fmt.Println(numberOfCarryOperations(555, 555))     // 3
	fmt.Println(numberOfCarryOperations(900, 11))      // 0
	fmt.Println(numberOfCarryOperations(145, 55))      // 2
	fmt.Println(numberOfCarryOperations(0, 0))         // 0
	fmt.Println(numberOfCarryOperations(1, 99999))     // 5
	fmt.Println(numberOfCarryOperations(999045, 1055)) // 5
	fmt.Println(numberOfCarryOperations(101, 809))     // 1
	fmt.Println(numberOfCarryOperations(189, 209))     // 1
}