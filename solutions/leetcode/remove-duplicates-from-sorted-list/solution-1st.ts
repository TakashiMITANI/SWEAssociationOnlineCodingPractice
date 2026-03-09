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

  let inputListNode: ListNode | null = head;
  const visitedNodesSet: Set<number> = new Set();

  while (inputListNode !== null) {
    visitedNodesSet.add(inputListNode.val);
    inputListNode = inputListNode.next;
  }

  const sortedVisitedNodesArray: number[] = [...visitedNodesSet].sort((a, b) => a - b);

  const dummyListNode = new ListNode(0);
  let sortedListNode = dummyListNode;
  sortedVisitedNodesArray.forEach((val) => {
    sortedListNode.next = new ListNode(val);
    sortedListNode = sortedListNode.next;
  });

  return dummyListNode.next;
}
