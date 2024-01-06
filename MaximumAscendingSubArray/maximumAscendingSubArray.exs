# Solution for: https://leetcode.com/problems/maximum-ascending-subarray-sum/description/
defmodule Solution do

  defp max_ascending_sum([], _, _, max_sum), do: max_sum

  defp max_ascending_sum([head | tail], prev, ac, max_sum) do
    if head > prev do
      max_ascending_sum(tail, head, ac + head, max(ac + head, max_sum))
    else
      max_ascending_sum(tail, head, head, max(head, max_sum))
    end
  end

  @spec max_ascending_sum(nums :: [integer]) :: integer
  def max_ascending_sum(nums) do
    max_ascending_sum(nums, 0, 0, 0)
  end
end
