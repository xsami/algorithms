# Solution for: https://leetcode.com/problems/check-if-the-number-is-fascinating/description/
defmodule Solution do
  defp get_digits(0), do: %{}
  defp get_digits(n) do
    Map.merge(%{ rem(n, 10) => 1 }, get_digits(div(n, 10)), fn(_, v1, v2) -> v1 + v2 end)
  end
  @spec is_fascinating(n :: integer) :: boolean
  def is_fascinating(n) do
    digits = [n, n * 2, n * 3] |> Enum.reduce(%{}, fn(val, acc) ->
      Map.merge(acc, get_digits(val), fn(_, v1, v2) -> v1 + v2 end)
    end)
    1..9 |> Enum.all?(fn(val) ->
      digits[val] == 1
    end) and digits[0] == nil
  end
end
