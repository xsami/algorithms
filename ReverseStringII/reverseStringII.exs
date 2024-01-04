# Solution for: https://leetcode.com/problems/reverse-string-ii/description/
defmodule Solution do
  @spec reverse_str(s :: String.t, k :: integer) :: String.t
  def reverse_str(s, k) do
    s_arr = String.split(s, "")
    [h | t] = s_arr |>
    Enum.with_index |>
    Enum.reduce([""], fn({str, idx}, prev) ->
      [h | t] = prev
      if rem(idx, k) == 0 do
        ["", h <> str] ++ t
      else
        [h <> str] ++ t
      end
    end) |>
    Enum.reverse
    t |> Enum.map_every(2, fn(s) -> String.reverse(s) end) |> Enum.join("")
  end
end
