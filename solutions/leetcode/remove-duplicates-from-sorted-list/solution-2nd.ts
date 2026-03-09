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

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  let current: ListNode | null = head;

  // ソート済み前提なので、重複は必ず隣接して現れる。
  while (current !== null && current.next !== null) {
    // 同じ値が続く場合は current を進めず、next を1つ飛ばして重複を取り除く。
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      // 値が異なる場合だけ、次のノードへ進む。
      current = current.next;
    }
  }
  return head;
}
