# Solutin for: https://leetcode.com/problems/separate-the-digits-in-an-array/description/
defmodule Solution do
  @spec separate_digits(nums :: [integer]) :: [integer]
  def separate_digits(nums) do
    nums |> Enum.reduce([], fn(n, acc) ->
      acc ++ Integer.digits(n)
    end)
  end
end
