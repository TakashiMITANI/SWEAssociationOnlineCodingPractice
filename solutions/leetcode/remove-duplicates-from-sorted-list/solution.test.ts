import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { deleteDuplicates, ListNode } from "./solution-target";

function buildList(values: number[]): ListNode | null {
  if (values.length === 0) {
    return null;
  }

  const nodes = values.map((value) => new ListNode(value));
  for (let i = 0; i < nodes.length - 1; i += 1) {
    nodes[i].next = nodes[i + 1];
  }

  return nodes[0];
}

function toArray(head: ListNode | null): number[] {
  const values: number[] = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
}

function assertListEqual(actual: ListNode | null, expected: ListNode | null): void {
  assert.deepEqual(toArray(actual), toArray(expected));
}

describe("deleteDuplicates", () => {
  it("サンプル1: [1,1,2] -> [1,2]", () => {
    const head = buildList([1, 1, 2]);
    const result = deleteDuplicates(head);
    assertListEqual(result, buildList([1, 2]));
  });

  it("サンプル2: [1,1,2,3,3] -> [1,2,3]", () => {
    const head = buildList([1, 1, 2, 3, 3]);
    const result = deleteDuplicates(head);
    assertListEqual(result, buildList([1, 2, 3]));
  });

  it("[1,1,1] -> [1]", () => {
    const head = buildList([1, 1, 1]);
    const result = deleteDuplicates(head);
    assertListEqual(result, buildList([1]));
  });
});
