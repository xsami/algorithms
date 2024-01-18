# Solution for: https://leetcode.com/problems/minimum-moves-to-convert-string/
defmodule Solution do
  @spec minimum_moves(s :: String.t) :: integer
  def minimum_moves(s) do
    {res, _} = s |> String.split("", trim: true) |> Enum.reduce({0, 0}, fn(char, acc) ->
        {result, skip} = acc
        if skip > 0  and skip < 3 do
          {result, skip + 1}
        else
          if char == "X" do
            {result + 1, 1}
          else
            {result, skip}
          end
        end
    end)
    res
  end
end
