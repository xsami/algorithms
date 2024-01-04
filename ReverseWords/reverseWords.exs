# Solution for: https://leetcode.com/problems/reverse-words-in-a-string-iii/
defmodule Solution do
  @spec reverse_words(s :: String.t) :: String.t
  def reverse_words(s) do
    s |> String.split(" ") |> Enum.map(fn(str) -> String.reverse(str) end) |> Enum.join(" ")
  end
end
