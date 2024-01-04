# solution for: https://leetcode.com/problems/reverse-integer/description/
defmodule Solution do
  @spec reverse(x :: integer) :: integer
  def reverse(x) do
    is_positive = x >= 0
    if is_positive do
      reverse(x, 0)
    else
      -reverse(-x, 0)
    end
  end

  defp reverse(0, result), do: result

  defp isOutSideRange(n), do: n >= 2147483648

  defp reverse(number, result) do
    new_result = result * 10 + rem(number, 10)
    new_number = div(number, 10)
    if isOutSideRange(new_result) do
      reverse(0, 0)
    else
      reverse(new_number, new_result)
    end
  end

end
