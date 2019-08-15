// Calculate the number of even or odd numbers between
// the result of multiplying 2 numbers of length N

package main

func highestNDigitNumber(N int, number int) int {
	if N < 1 {
		return number
	}
	return highestNDigitNumber(N-1, number*10+9)
}

// Main function that will return the result
func amountOfNumbers(evenOrOdd string, numberLength int) int {
	oddAmount, evenAmount := 0, 0

	highestNumber := highestNDigitNumber(numberLength, 0)
	mulNumber := highestNumber * highestNumber

	if mulNumber&1 == 0 {
		oddAmount = mulNumber/2 + 1
		evenAmount = mulNumber / 2
	} else {
		oddAmount = mulNumber / 2
		evenAmount = mulNumber/2 + 1
	}

	if evenOrOdd == "EVEN" {
		return evenAmount
	}
	return oddAmount
}
