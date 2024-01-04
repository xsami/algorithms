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

  @spec add_two_numbers(l1 :: ListNode.t | nil, l2 :: ListNode.t | nil, r :: Integer) :: ListNode.t | nil
  def add_two_numbers(l1, l2) do
    add_two_numbers(l1, l2, 0)
  end

  defp add_two_numbers(nil, nil, 0), do: nil
  defp add_two_numbers(nil, nil, r), do: %ListNode{val: r}

  defp add_two_numbers(l1, nil, r) do
    sum = r + l1.val
    %ListNode{val: rem(sum, 10), next: add_two_numbers(l1.next, nil, div(sum, 10))}
  end

  defp add_two_numbers(nil, l2, r) do
    sum = r + l2.val
    %ListNode{val: rem(sum, 10), next: add_two_numbers(nil, l2.next, div(sum, 10))}
  end

  defp add_two_numbers(l1, l2, r) do
    sum = l1.val + l2.val + r
    %ListNode{ val: rem(sum, 10), next: add_two_numbers(l1.next, l2.next, div(sum, 10))}
  end

end
