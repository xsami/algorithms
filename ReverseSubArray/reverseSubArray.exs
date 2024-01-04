# Solution for: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/
defmodule Solution do
  @spec can_be_equal(target :: [integer], arr :: [integer]) :: boolean
  def can_be_equal(target, arr) do
    new_arr = arr |> Enum.sort
    target |> Enum.sort |> Enum.with_index |> Enum.all?(fn({number, index}) -> number === Enum.at(new_arr, index) end)
  end
end
