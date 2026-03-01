import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { hasCycle, ListNode } from "./solution-target";

function buildList(values: number[], pos: number): ListNode | null {
  if (values.length === 0) {
    return null;
  }

  const nodes = values.map((value) => new ListNode(value));
  for (let i = 0; i < nodes.length - 1; i += 1) {
    nodes[i].next = nodes[i + 1];
  }

  if (pos >= 0) {
    nodes[nodes.length - 1].next = nodes[pos];
  }

  return nodes[0];
}

describe("hasCycle", () => {
  it("サンプル1: head=[3,2,0,-4], pos=1 は true", () => {
    const head = buildList([3, 2, 0, -4], 1);
    assert.equal(hasCycle(head), true);
  });

  it("サンプル2: head=[1,2], pos=0 は true", () => {
    const head = buildList([1, 2], 0);
    assert.equal(hasCycle(head), true);
  });

  it("サンプル3: head=[1], pos=-1 は false", () => {
    const head = buildList([1], -1);
    assert.equal(hasCycle(head), false);
  });
});
