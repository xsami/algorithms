package main

import (
	"fmt"
	"sort"
)

func upperBoundBS(start, end int32, scores []int32, find int32) int32 {

	if start >= end {
		return end
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

func climbingLeaderboard(scores []int32, alice []int32) []int32 {

	res := []int32{}
	repetitions := []int32{}
	var prev int32 = 0

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

	// int32(len(scores))-
	for idx, el := range res {
		aliceScore := alice[idx]
		pos := el
		if el >= int32(len(scores)) {
			pos = int32(len(scores) - 1)
		} else if el < 0 {
			pos = 0
		}

		repIdx := len(repetitions) - 1 - int(pos)
		if repIdx < 0 {
			repIdx = 0
		}

		if aliceScore == scores[pos] {
			// TODO: complete
		}

	}

	fmt.Println(repetitions)
	return res
}

func main() {

	sc := []int32{100, 90, 90, 80, 75, 60}
	al := []int32{50, 65, 77, 90, 102}

	result := climbingLeaderboard(sc, al)

	fmt.Println(result)
}
