# Solution for: https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
#
# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do

  defp get_map_count(nil), do: []
  defp get_map_count(root) do
    [root.val] ++ get_map_count(root.left) ++ get_map_count(root.right)
  end

  @spec find_mode(root :: TreeNode.t | nil) :: [integer]
  def find_mode(root) do
    chunked_by_n = root |> get_map_count |> Enum.sort |> Enum.chunk_by(fn(n) -> n end)
    max_chunk = chunked_by_n |> Enum.reduce(0, fn(v, acc) -> max(acc, Enum.count(v)) end)
    chunked_by_n |> Enum.reduce([], fn(v, acc) ->
      if Enum.count(v) == max_chunk do
        [h|t] = v
        [h | acc]
      else
        acc
      end
    end)
  end
end
