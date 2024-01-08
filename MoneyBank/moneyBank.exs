# Solution for: https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/
defmodule Solution do

  defp get_sum(n, -1), do: 0

  defp get_sum(n, r) do
    n * (4 + r) + get_sum(n, r-1)
  end

  defp get_sum_a_to_b(a, b) do
    div(a * (a + 1), 2) - div(b * (b+ 1), 2)
  end

  @spec total_money(n :: integer) :: integer
  def total_money(n) do
    r = rem(n, 7)
    d = div(n, 7)
    t = r + d
    if r == 0 do
        get_sum(7, d - 1)
    else
        get_sum(7, d - 1) + get_sum_a_to_b(t, d)
    end
  end
end
