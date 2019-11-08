package main

import (
	"fmt"
	"sort"
)

func oppositive(n, l int32) int32 {
	return l - n
}

func upperBoundBS(start, end int32, scores []int32, find int32) int32 {

	if start >= end {
		return start
	}

	mid := int32(start + (end-start)/2)

	if scores[mid] == find {
		return mid
	}
	if scores[mid] > find {
		return upperBoundBS(start, mid, scores, find)
	}
	return upperBoundBS(mid+1, end, scores, find)
}

func getPrefixSum(rp []int32, pos int32, scores []int32, aliceScore int32) int32 {
	var res int32
	// tp := int32(len(scores)) - pos - 2
	// fmt.Println(tp)
	res = rp[0]
	return res
}

func climbingLeaderboard(scores []int32, alice []int32) []int32 {

	res := []int32{}
	repetitions := []int32{}
	var prev int32

	sort.Slice(scores, func(i, j int) bool { return scores[i] < scores[j] })

	// Store the repetitions index, as a prefix sum
	for i := len(scores) - 1; i > 0; i-- {
		if scores[i] == scores[i-1] {
			prev++
		}
		repetitions = append(repetitions, prev)
	}
	repetitions = append(repetitions, prev)

	for _, el := range alice {
		res = append(res, upperBoundBS(0, int32(len(scores)-1), scores, int32(el)))
	}

	fmt.Println(res)
	for idx, el := range res {
		aliceScore := alice[idx]
		pos := el
		sc := scores[pos]

		if aliceScore > sc {
			pos++
		} else if aliceScore < sc {
			pos--
		}
		fmt.Println(el)
		res[idx] = int32(len(scores)) - pos - getPrefixSum(repetitions, pos, scores, aliceScore)
	}

	fmt.Println(repetitions)
	return res
}

func main() {

	sc := []int32{60, 75, 80, 90, 90, 100}
	al := []int32{50, 65, 77, 90, 102}

	result := climbingLeaderboard(sc, al)

	fmt.Println(result)
}
