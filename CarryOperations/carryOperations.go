package main

func decompose(number int) []int {

	res := []int{}

	for number > 0 {
		res = append(res, number%10)
		number /= 10
	}
	return res
}

func getCarried(max, min []int) int {

	var sum, counter, carried int

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

}
