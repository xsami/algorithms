# Solution for: https://leetcode.com/problems/same-tree/description/
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

  def is_same_tree(nil, nil), do: true
  def is_same_tree(_, nil), do: false
  def is_same_tree(nil, _), do: false

  @spec is_same_tree(p :: TreeNode.t | nil, q :: TreeNode.t | nil) :: boolean
  def is_same_tree(p, q) do
    if p.val != q.val do
        false
    else
        is_same_tree(p.left, q.left) && is_same_tree(p.right, q.right)
    end
  end
end
