# Solution for: https://leetcode.com/problems/count-hills-and-valleys-in-an-array/
defmodule Solution do
  @spec count_hill_valley(nums :: [integer]) :: integer
  def count_hill_valley(nums) do
    unique_nums = Enum.reduce(nums, [], fn num, acc ->
      if acc == [] do
        [num]
      else
        [h | _] = acc
        if h == num do
          acc
        else
          [num | acc]
        end
      end
    end)
    unique_nums
    |> Enum.with_index
    |> Enum.reduce(0, fn num, acc ->
      {number, index} = num
      if index > 0 do
        prev = unique_nums |> Enum.at(index - 1)
        next = unique_nums |> Enum.at(index + 1)
        if next != nil and (prev < number && next < number or prev > number && next > number) do
          acc + 1
        else
          acc
        end
      else
        acc
      end
    end)
  end
end
