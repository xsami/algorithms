# Solution for: https://leetcode.com/problems/decode-xored-array/description/
import Bitwise

defmodule Solution do
  @spec decode(encoded :: [integer], first :: integer) :: [integer]
  def decode(encoded, first) do
    encoded |> Enum.reduce([first], fn(number, acc) ->
        [head|_] = acc
        [ bxor(head, number) | acc]
    end) |> Enum.reverse
  end
end
