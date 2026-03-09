# remove-duplicates-from-sorted-list

## 問題

- URL: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

## ファイル運用（1st/2nd/3rd）

- 初期テンプレートは `solution-1st.ts`, `solution-2nd.ts`, `solution-3rd.ts` を含みます
- 最終提出対象は `solution-3rd.ts` とし、`solution-1st.ts` / `solution-2nd.ts` は学習過程として保持します
- `solution-target.ts` の import 先は最終提出対象に合わせて切り替えます
- テスト対象は `solution-target.ts` の import 先を切り替えて選びます

例:

```ts
import { deleteDuplicates, ListNode } from "./solution-2nd";

export { deleteDuplicates, ListNode };
```

## 実行

```bash
npm run format:check
npm run lint -- solutions/leetcode/remove-duplicates-from-sorted-list
node --import tsx --test solutions/leetcode/remove-duplicates-from-sorted-list/solution.test.ts
```

## メモ

- 1st は `Set` + ソート + 再構築で実装可能だが、ソート済み前提では過剰
- 2nd/3rd でソート済み前提に合わせた隣接比較へ整理

## 最終決定（リポジトリに残す）

- 採用した方針: 現在ノードと次ノードを比較し、値が同じなら `current.next = current.next.next` で重複ノードを除去。異なるときだけ `current` を進める
- 計算量（時間/空間）: 時間 `O(n)` / 空間 `O(1)`
- 代替案と不採用理由: `Set` へ収集して再構築する方法は `O(n)` 追加メモリが必要で、ソート済み前提を活かせないため不採用
- レビューでの合意事項: レビューで更新
