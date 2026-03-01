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
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 連結リストにサイクルが存在するかを判定する。
// slow/fast の2ポインタを使い、参照が一致したらサイクルありとみなす。
export function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // fast が2手進める間だけループを継続する（進めなくなったらサイクルなし）。
  while ( slow !== null && fast !== null && fast.next !== null ){
    slow = slow.next;
    fast = fast.next.next;

    // 同じノード参照に到達した時点でサイクルあり。
    if ( slow === fast ){
      return true;
    }
  }

  return false;
}
