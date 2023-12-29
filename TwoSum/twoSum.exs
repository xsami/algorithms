# Two sum problem by leetcode: https://leetcode.com/problems/two-sum/description/
defmodule Solution do
  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target) do
    map = nums |> 
    Enum.with_index |> 
    Enum.reduce(%{}, fn({n, i}, prev) -> Map.put(prev, n, i) end)
    nums |>
    Enum.with_index |>
    Enum.reduce([], fn({cur_value, i}, prev) -> 
            if prev === [] do
                sub = target - cur_value
                if map[sub] != nil && map[sub] != i do
                  [i, map[sub]]
                else
                    prev
                end
            else
                prev
            end
        end)
  end
end