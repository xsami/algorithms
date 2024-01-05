# Solution for: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

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

  defp parse_list(nil), do: []

  defp parse_list(head) do
    [head.val] ++ parse_list(head.next)
  end

  defp get_BST(list, left, right) do
    if left <= right do
      mid = div(left + right, 2)
      %TreeNode{val: Enum.at(list, mid), left: get_BST(list, left, mid - 1), right: get_BST(list, mid + 1, right)}
    else
      nil
    end
  end

  @spec sorted_list_to_bst(head :: ListNode.t | nil) :: TreeNode.t | nil
  def sorted_list_to_bst(head) do
    list = parse_list(head)
    get_BST(list, 0, Enum.count(list) - 1)
  end
end
