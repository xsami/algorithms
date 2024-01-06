# Solution for: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

defmodule Solution do

  defp delete_duplicates(nil, _), do: nil

  defp delete_duplicates(head, prev) do
    if prev != nil and prev.val == head.val do
      delete_duplicates(head.next, head)
    else
      %ListNode{head | next: delete_duplicates(head.next, head)}
    end
  end

  @spec delete_duplicates(head :: ListNode.t | nil) :: ListNode.t | nil
  def delete_duplicates(head) do
    delete_duplicates(head, nil)
  end
end
