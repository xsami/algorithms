# Solution for: https://leetcode.com/problems/search-a-2d-matrix/
defmodule Solution do
  @spec search_matrix(matrix :: [[integer]], target :: integer) :: boolean
  def search_matrix(matrix, target) do
    matrix |>
    Enum.any?(fn(l) -> Enum.any?(l, fn(e) -> e == target end)  end)
  end
end
