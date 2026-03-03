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

  while ( fast !== null && fast.next !== null ) {
    slow = slow!.next;
    fast = fast.next!.next;

    // 1段階目: slow(1step) と fast(2step) の合流点を探す
    if ( fast === slow ) {
      slow = head;

      // 2段階目: 片方を head に戻し、同速で進めてループ開始ノードを見つける
      while ( slow !== fast ) {
        slow = slow!.next;
        fast = fast!.next;
      }

      // 再合流したノードがループの開始位置
      return slow;
    }
  }

  // fast が末尾に到達した場合はループなし
  return null;
};
