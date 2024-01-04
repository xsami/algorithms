# Solution for: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
defmodule Solution do

  defp is_operator(op), do: op == "+" || op == "-" || op == "/" || op == "*"

  @spec eval_rpn(tokens :: [String.t]) :: integer
  def eval_rpn(tokens) do
    [h | t] = tokens |>
    Enum.reduce([], fn(token, prev) ->
      if is_operator(token) do
        [a1| t1] = prev
        [a2| t2] = t1
        case token do
          "+" -> [a2 + a1 | t2]
          "-" -> [a2 - a1 | t2]
          "*" -> [a2 * a1 | t2]
          "/" -> [div(a2, a1) | t2]
          _ -> prev
        end
      else
        {num, _} = Integer.parse(token)
        [num | prev]
      end
    end)
    h
  end
end
