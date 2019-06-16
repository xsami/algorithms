int DP[107];

int getMaxMoney(std::vector<int> nums, int index) {
    if (index >= nums.size()) {
        return 0;
    }
    if ((index + 1) == nums.size() || (index + 2) == nums.size()) {
        return nums[index];
    }
    
    if (DP[index] == -1) {
        DP[index] = nums[index] + max( getMaxMoney(nums, index + 2), getMaxMoney(nums, index + 3) ) ;
    }
    return DP[index];
}

int houseRobber(std::vector<int> nums) {
    for (int i = 0; i < 107; i++) DP[i] = -1;
    return max(getMaxMoney(nums, 0), getMaxMoney(nums, 1));
}