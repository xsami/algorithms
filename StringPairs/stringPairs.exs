# Solution for: https://leetcode.com/problems/find-maximum-number-of-string-pairs/description/
defmodule Solution do
  @spec maximum_number_of_string_pairs(words :: [String.t]) :: integer
  def maximum_number_of_string_pairs(words) do
    map_words = words |> Enum.reduce(%{}, fn(w, acc) ->
      Map.put(acc, w, (acc[w] || 0) + 1)
    end)
    map_words |> Enum.reduce(0, fn({k, _}, acc) ->
      reversed_key = String.reverse(k)
      if map_words[reversed_key] != nil do
        if reversed_key == k do
            acc + div(map_words[reversed_key], 2)
        else
            acc + 1
        end
      else
        acc
      end
    end) |> div(2)
  end
end
