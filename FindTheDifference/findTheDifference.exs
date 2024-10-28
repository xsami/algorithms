# solution for: https://leetcode.com/problems/find-the-difference/description/

defmodule Solution do

  def get_difference([], some) do
    [h | _] = some
    h
  end

  def get_difference(a, b) do
    [fa | ra] = a
    [fb | rb] = b

    if fa != fb do
        fb
    else
        get_difference(ra, rb)
    end
  end

  @spec find_the_difference(s :: String.t, t :: String.t) :: char
  def find_the_difference(s, t) do

    aSorted = s |> String.split("", trim: true) |> Enum.sort
    bSorted = t |> String.split("", trim: true) |> Enum.sort

    [res] = get_difference(aSorted, bSorted) |> String.to_charlist
    res
  end
end
