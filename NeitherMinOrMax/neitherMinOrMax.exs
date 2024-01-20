# Solution for: https://leetcode.com/problems/neither-minimum-nor-maximum/
defmodule Solution do
  @spec find_non_min_or_max(nums :: [integer]) :: integer
  def find_non_min_or_max(nums) do
    minimun = nums |> Enum.reduce(100, fn(val, acc) ->
      min(val, acc)
    end)
    maximun = nums |> Enum.reduce(1, fn(val, acc) ->
      max(val, acc)
    end)
    Enum.find(nums, -1, fn(n) -> n != minimun and n != maximun end)
  end
end
