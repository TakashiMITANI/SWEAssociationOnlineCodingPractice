import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { detectCycle, ListNode } from "./solution-target";

function buildList(values: number[], pos: number): {
  head: ListNode | null;
  cycleEntry: ListNode | null;
} {
  if (values.length === 0) {
    return { head: null, cycleEntry: null };
  }

  const nodes = values.map((value) => new ListNode(value));
  for (let i = 0; i < nodes.length - 1; i += 1) {
    nodes[i].next = nodes[i + 1];
  }

  let cycleEntry: ListNode | null = null;
  if (pos >= 0) {
    cycleEntry = nodes[pos];
    nodes[nodes.length - 1].next = cycleEntry;
  }

  return { head: nodes[0], cycleEntry };
}

describe("detectCycle", () => {
  it("サンプル1: head=[3,2,0,-4], pos=1 は index=1 のノードを返す", () => {
    const { head, cycleEntry } = buildList([3, 2, 0, -4], 1);
    assert.equal(detectCycle(head), cycleEntry);
  });

  it("サンプル2: head=[1,2], pos=0 は index=0 のノードを返す", () => {
    const { head, cycleEntry } = buildList([1, 2], 0);
    assert.equal(detectCycle(head), cycleEntry);
  });

  it("サンプル3: head=[1], pos=-1 は null を返す", () => {
    const { head } = buildList([1], -1);
    assert.equal(detectCycle(head), null);
  });
});
