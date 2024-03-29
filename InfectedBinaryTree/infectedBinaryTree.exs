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

  # Get root traversal the nodes recursively
  defp root_traversal([], _, _, counter), do: counter
  defp root_traversal(root_as_list, root, visited, counter) do

    # Update the list of nodes with the ones that will be visited
    new_visited = Map.merge(visited, Enum.reduce(root_as_list, %{}, fn(node, acc) ->
      Map.put(acc, node.val, true)
    end))

    # Update the list with the children and parents of these nodes (root_as_list)
    new_root_list = root_as_list |> Enum.reduce([], fn(node, acc) ->
      acc ++ [node.left, node.right]
    end) |> Enum.filter(fn(node) -> node != nil and visited[node.val] != true end)

    # Recursively traversal trought all the nodes of the root
    root_traversal(new_root_list, root, new_visited, counter + 1)
  end


  @spec amount_of_time(root :: TreeNode.t | nil, start :: integer) :: integer
  def amount_of_time(root, start) do
    root_traversal([get_node(root, start)], root, %{}, -1)
  end
end
