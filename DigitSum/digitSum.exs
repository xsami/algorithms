# Solution for: https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/
defmodule Solution do
  @spec digit_sum(s :: String.t, k :: integer) :: String.t
  def digit_sum(s, k) do
    if String.length(s) > k do
      {res, _} = s
      |> String.to_charlist
      |> Enum.with_index
      |> Enum.reduce({[], 0}, fn({char, idx}, acc) ->
        digit_base_ten = char - 48
        if idx > 0 do
          {list, counter} = acc
          if rem(idx+1, k) == 0 or (idx+1) == String.length(s) do
            {list ++ [counter + digit_base_ten], 0}
          else
            {list, counter + digit_base_ten}
          end
        else
          {[], digit_base_ten}
        end
      end)
      res |> Enum.join("") |> digit_sum(k)
    else
      s
    end
  end
end
