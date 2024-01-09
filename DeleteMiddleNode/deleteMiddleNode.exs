# Solution for: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/

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

  defp next_node(nil, _, _, _), do: nil


  defp next_node(head, prev, count, mid) do
    if count == mid do
      next_node(head.next, head, count + 1, mid)
    else
      %ListNode{head | next: next_node(head.next, head, count + 1, mid)}
    end
  end

  defp count_nodes(head) do
    if head == nil do
      0
    else
      1 + count_nodes(head.next)
    end
  end

  @spec delete_middle(head :: ListNode.t | nil) :: ListNode.t | nil
  def delete_middle(head) do
    len = count_nodes(head)
    mid = div(len, 2)
    if mid == 0 do
      nil
    else
      next_node(head, nil, 0, mid)
    end
  end
end
