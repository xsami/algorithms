# Solution for: https://leetcode.com/problems/invert-binary-tree/description/
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

  def invert_tree(nil), do: nil

  @spec invert_tree(root :: TreeNode.t | nil) :: TreeNode.t | nil
  def invert_tree(root) do
   %TreeNode{val: root.val, left: invert_tree(root.right), right: invert_tree(root.left)}
  end
end
