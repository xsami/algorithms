# Solution for: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
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
  def max_depth(nil), do: 0

  @spec max_depth(root :: TreeNode.t | nil) :: integer
  def max_depth(root) do
    1 + max(max_depth(root.right), max_depth(root.left))
  end
end
