# Solution for: https://leetcode.com/problems/count-complete-tree-nodes/description/

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

  def count_nodes(nil), do: 0

  @spec count_nodes(root :: TreeNode.t | nil) :: integer
  def count_nodes(root) do
    1 + count_nodes(root.left) + count_nodes(root.right)
  end
end
