def maxInArray(arr, inArr):
    bestIndex = 0
    result = 0
    for i in range(1, len(arr)):
        if arr[bestIndex] < arr[i]:
            bestIndex = i
    result = arr[bestIndex]
    for i in range(0, bestIndex):
        if result < (arr[bestIndex] - arr[i]):
            result = arr[bestIndex] - arr[i]
    for i in range(0, len(inArr)):
        if inArr[i] > result:
            result = inArr[i]
    return result

def arrayMaxConsecutiveSum2(inputArray):
    prefixSum = []
    for i in range(0, len(inputArray)):
        if i == 0:
            prefixSum.append(inputArray[i])
        else:
            prefixSum.append(prefixSum[i-1] + inputArray[i])
    return maxInArray(prefixSum, inputArray)