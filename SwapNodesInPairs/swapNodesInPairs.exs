# Solution for: https://leetcode.com/problems/swap-nodes-in-pairs/description/

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
  @spec swap_pairs(head :: ListNode.t | nil) :: ListNode.t | nil
  def swap_pairs(head) do
    swap_pairs(head, nil, 1)
  end

  defp swap_pairs(nil, prev, counter), do: nil

  defp swap_pairs(head, prev, counter) do
    if counter == 2 do
        # perform swap of the nodes
        %{head | next: %{prev | next: swap_pairs(head.next, head, 1)}}
    else
        if head.next == nil do
            head
        else
            swap_pairs(head.next, head, counter + 1)
        end

    end
  end
end
