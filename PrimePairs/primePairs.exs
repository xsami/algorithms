defmodule Solution do

  defp get_prime_numbers(n) do
    2..n |> Enum.reduce(%{}, fn(i, acc) ->
      if acc[i] == nil or acc[i] == false do
        n_div = div(n, i)
        inner_update = 2..n_div |> Enum.reduce(%{}, fn(j, inner_acc) ->
          to_update = j * i
          Map.merge(inner_acc, %{to_update => true})
        end)
        Map.merge(acc, inner_update)
      else
        acc
      end
    end)
  end

  defp get_prime_pair(primes, n) do
    div(n, 2)..2 |> Enum.reduce([], fn(val, acc) ->
      if primes[val] == nil and primes[n - val] == nil do
        [[val, n-val] | acc]
      else
        acc
      end
    end)
  end

  @spec find_prime_pairs(n :: integer) :: [[integer]]
  def find_prime_pairs(n) do

    if n > 3 do
      primes = get_prime_numbers(n * 2)
      get_prime_pair(primes, n)
    else
      []
    end

  end
end
