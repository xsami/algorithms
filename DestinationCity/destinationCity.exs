# Solution for: https://leetcode.com/problems/destination-city/description/
defmodule Solution do

  defp get_empty_city([], map), do: map

  defp get_empty_city([[from, to] | tail], map) do
    get_empty_city(tail, Map.put(map, from, to))
  end

  @spec dest_city(paths :: [[String.t]]) :: String.t
  def dest_city(paths) do
    map = get_empty_city(paths, %{})
    map |> Enum.reduce("", fn({k, v}, acc) ->
      if map[v] != nil do
        acc
      else
        v
      end
    end)
  end
end
