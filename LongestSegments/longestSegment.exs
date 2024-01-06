# Solution for: https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/description/
defmodule Solution do

  defp get_longest_count([], _, _, max_sum), do: max_sum

  defp get_longest_count([head | tail], char, acc, max_sum) do
    if head != char do
      get_longest_count(tail, char, 0, max(max_sum, acc))
    else
      get_longest_count(tail, char, acc + 1, max(max_sum, acc + 1))
    end
  end

  @spec check_zero_ones(s :: String.t) :: boolean
  def check_zero_ones(s) do
    sList = String.split(s, "")
    get_longest_count(sList, "1", 0, 0) > get_longest_count(sList, "0", 0, 0)
  end
end
