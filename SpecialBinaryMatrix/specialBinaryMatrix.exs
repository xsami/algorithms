# Solution for: https://leetcode.com/problems/special-positions-in-a-binary-matrix/description
defmodule Solution do

  defp get_horizontal_count([]), do: []

  defp get_horizontal_count([head | tail]) do
    [Enum.reduce(head, 0, fn(n, acc) -> n + acc end)] ++ get_horizontal_count(tail)
  end

  defp get_vertical_count([], _), do: []

  defp get_vertical_count(mat, idx) do
    [mHead|_] = mat
    if idx >= Enum.count(mHead) do
      []
    else
     Enum.reduce(mat, [0], fn(el, acc) ->
      [h|_] = acc
      [Enum.at(el, idx) + h]
    end) ++ get_vertical_count(mat, idx+1)
    end
  end

  @spec num_special(mat :: [[integer]]) :: integer
  def num_special(mat) do
    horizontal = get_horizontal_count(mat)
    vertical = get_vertical_count(mat, 0)
    mat |> Enum.with_index |> Enum.reduce(0, fn({list, row}, acc) ->
      res = list |> Enum.with_index |> Enum.reduce(0, fn({num, col}, prev) ->
        if num == 1 and Enum.at(vertical, col, 1) == 1 and (Enum.at(vertical, col, 1) == Enum.at(horizontal, row, 1)) do
          prev + 1
        else
          prev
        end
      end)
      res + acc
    end)
  end
end
