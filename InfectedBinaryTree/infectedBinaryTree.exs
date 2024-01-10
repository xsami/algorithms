# Solution for: https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/?envType=daily-question&envId=2024-01-10

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

  # Get node from a value
  defp get_node(nil, _), do: nil
  defp get_node(root, val) do
    if root.val == val do
      root
    else
      left = get_node(root.left, val)
      right = get_node(root.right, val)
      left || right
    end
  end

  # Get the parent from a node or nil it's root
  defp get_node_parent(nil, _), do: nil # safeguard, but this should never be true
  defp get_node_parent(root, child_node) do
    if child_node.val == root.val do
      nil
    else
      if (root.left != nil and root.left.val == child_node.val) or (root.right != nil and root.right.val == child_node.val) do
        root
      else
        left = get_node_parent(root.left, child_node)
        right = get_node_parent(root.right, child_node)
        left || right
      end
    end
  end

  # Get root traversal the nodes recursively
  defp root_traversal([], _, _, counter), do: counter
  defp root_traversal(root_as_list, root, visited, counter) do
    new_visited = Map.merge(visited, Enum.reduce(root_as_list, %{}, fn(node, acc) ->
      Map.put(acc, node.val, true)
    end))
    new_root_list = root_as_list |> Enum.reduce([], fn(node, acc) ->
      acc ++ [node.left, node.right, get_node_parent(root, node)]
    end) |> Enum.filter(fn(node) -> node != nil and visited[node.val] != true end)
    root_traversal(new_root_list, root, new_visited, counter + 1)
  end


  @spec amount_of_time(root :: TreeNode.t | nil, start :: integer) :: integer
  def amount_of_time(root, start) do
    root_traversal([get_node(root, start)], root, %{}, -1)
  end
end
