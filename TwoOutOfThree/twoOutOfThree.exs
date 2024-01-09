# Solution for: https://leetcode.com/problems/two-out-of-three/description/
defmodule Solution do

  defp convert_to_map([]), do: %{}

  defp convert_to_map([head | tail]) do
    Map.merge(%{head => 1}, convert_to_map(tail))
  end

  @spec two_out_of_three(nums1 :: [integer], nums2 :: [integer], nums3 :: [integer]) :: [integer]
  def two_out_of_three(nums1, nums2, nums3) do
    map1 = nums1 |> convert_to_map
    map2 = nums2 |> convert_to_map
    map3 = nums3 |> convert_to_map

    Map.merge(Map.merge(map1, map2, fn(_, v1, v2) -> v1 + v2 end), map3, fn(_, v1, v2) -> v1 + v2 end) |>
    Enum.reduce([], fn({k, v}, acc) ->
      if v > 1 do
        [k | acc]
      else
        acc
      end
    end)
  end
end
