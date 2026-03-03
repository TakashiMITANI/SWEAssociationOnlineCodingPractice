# linked-list-cycle-ii

## 問題

- URL: https://leetcode.com/problems/linked-list-cycle-ii/

## ファイル運用（1st/2nd/3rd）

- 初期テンプレートは `solution.ts` を参照します
- 試行を分けて保持する場合は `solution-1st.ts`, `solution-2nd.ts`, `solution-3rd.ts` を作成します
- テスト対象は `solution-target.ts` の import 先を切り替えて選びます
- 現在のテスト対象は `solution-3rd.ts` です

例:

```ts
import { detectCycle, ListNode } from "./solution-3rd";

export { detectCycle, ListNode };
```

## 実行

```bash
node --import tsx --test solutions/leetcode/linked-list-cycle-ii/solution.test.ts
npm run lint -- solutions/leetcode/linked-list-cycle-ii
```

## メモ

- 2026-03-03: 3rd トライアル完了
- 2026-03-03: `node --import tsx --test solutions/leetcode/linked-list-cycle-ii/solution.test.ts` 実行（pass: 1, fail: 0）
- `solution-1st.ts` / `solution-2nd.ts` は試行ログとして保持
- `solution-3rd.ts` を最終提出対象として `solution-target.ts` で参照

## 最終決定（リポジトリに残す）

- 採用した方針: `solution-3rd.ts` を最終提出版として採用し、`1st/2nd` は学習履歴として残す
- 計算量（時間/空間）: 時間 `O(n)`、追加メモリ `O(1)`
- 代替案と不採用理由: 訪問済みノード参照を `Set` で保持する案は実装は直感的だが、追加メモリが `O(n)` となり問題の定数メモリ条件に合わないため不採用。ノード書き換えは禁止されているため不採用。
- レビューでの合意事項: 特になし
