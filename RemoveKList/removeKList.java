// Definition for singly-linked list:
// class ListNode<T> {
//   ListNode(T x) {
//     value = x;
//   }
//   T value;
//   ListNode<T> next;
// }
//
ListNode<Integer> removeKFromList(ListNode<Integer> l, int k) {
    ListNode<Integer> temp = null;
    ListNode<Integer> ftx = null;
    while (l != null) {
        if (l.value != k) {
            if (temp == null) {
                temp = new ListNode<Integer>(l.value);
                ftx = temp;
            } else {
                temp.next = new ListNode<Integer>(l.value);
                temp = temp.next;
            }
        }
        l = l.next;
    }
    return ftx;
}
