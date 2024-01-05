# Solution for: https://leetcode.com/problems/string-to-integer-atoi/description/
defmodule Solution do
  @spec my_atoi(s :: String.t) :: integer
  def my_atoi(s) do
    s |> String.trim |> Integer.parse |> get_result
  end

  defp get_result({num, str}) do
    if abs(num) >= 2147483648 do
        if num > 0 do
            2147483647
        else
            -2147483648
        end
    else
        num
    end
  end

  defp get_result(:error), do: 0

end
