# Solution for: https://leetcode.com/problems/symmetric-tree/description/
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

  defp is_semetric_bfs(left_node_list, right_node_list) do

    mapper = fn(v) -> if v == nil, do: nil, else: v.val end

    left_list_values = Enum.map(left_node_list, fn(v) -> mapper.(v) end)
    right_list_values = Enum.map(right_node_list, fn(v) -> mapper.(v) end)

    left_filtered = Enum.filter(left_node_list, fn(n) -> n != nil end)
    right_filtered = Enum.filter(right_node_list, fn(n) -> n != nil end)

    # inverse the oder to compare on the next iterations
    new_left = Enum.reduce(left_filtered, [], fn(v, acc) -> [v.right, v.left | acc] end)
    new_right = Enum.reduce(right_filtered, [], fn(v, acc) ->[v.left, v.right | acc] end)


    if left_list_values == right_list_values do
      if left_filtered == [] and right_filtered == [] do
        true
      else
        is_semetric_bfs(new_left, new_right)
      end
    else
      IO.inspect(left_node_list)
      IO.puts("====BREAK======")
      IO.inspect(right_node_list)
      false
    end

  end


  @spec is_symmetric(root :: TreeNode.t | nil) :: boolean
  def is_symmetric(root) do
    is_semetric_bfs([root.left], [root.right])
  end
end
