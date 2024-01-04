# Solution for: https://leetcode.com/problems/sum-of-number-and-its-reverse/description/
defmodule Solution do

  @spec sum_of_number_and_reverse(num :: integer) :: boolean
  def sum_of_number_and_reverse(num) do
    if num === 1 do
      false
    else
      sum_of_number_and_reverse(num, div(num, 2))
    end
  end

  defp sum_of_number_and_reverse(num, mid) do
    rev = reverse(mid)
    if mid + rev == num do
      true
    else
      if mid < num do
        sum_of_number_and_reverse(num, mid + 1)
      else
        false
      end
    end
  end

  def reverse(x), do: reverse(x, 0)

  defp reverse(0, result), do: result

  defp reverse(number, result) do
    new_result = result * 10 + rem(number, 10)
    new_number = div(number, 10)
    reverse(new_number, new_result)
  end
end
