/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
 export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export function detectCycle(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while ( slow !== null && fast !== null && fast.next !== null ) {
      slow = slow.next;
      fast = fast.next.next;

      if ( slow === fast ) {
        slow = head;

        while ( slow !== null && fast !== null && slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }

        return fast;
      }
    }

    return null;
};
