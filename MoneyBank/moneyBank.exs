defmodule Solution do

  defp get_sum(n, -1), do: 0

  defp get_sum(n, r) do
    n * (4 + r) + get_sum(n, r-1)
  end

  @spec total_money(n :: integer) :: integer
  def total_money(n) do
    r = rem(n, 7)
    d = div(n, 7)
    t = r + d
    if r == 0 do
        get_sum(7, d - 1)
    else
        get_sum(7, d - 1) + div(t * (t + 1), 2) - d
    end
  end
end
