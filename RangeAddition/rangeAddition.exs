defmodule Solution do

  @spec max_count(m :: integer, n :: integer, ops :: [[integer]]) :: integer
  def max_count(m, n, ops) do
    ops |> Enum.reduce(%{}, fn([x, y], acc) ->
      key = {x, y}
      Map.merge(acc, %{ key => (Map.get(acc, key) || 0) + 1 })
    end)
  end
end
