# linked-list-cycle

## 問題

- URL: https://leetcode.com/problems/linked-list-cycle/

## 実行方法

```bash
# 例: プロジェクト標準の TypeScript 実行コマンドを記載
# npm run test
# node --import tsx --test solutions/leetcode/linked-list-cycle/solution.test.ts
# npm run lint -- solutions/leetcode/linked-list-cycle/solution.test.ts
```

## メモ

- 必要なメモを記録

## 最終判断（リポジトリに残す）

- 採用した方針: Floyd の2ポインタ法（`slow` は1ステップ、`fast` は2ステップ）で、同一ノード参照への到達有無でサイクルを判定する。
- 計算量（時間/空間）: 時間 `O(n)`、追加メモリ `O(1)`。
- 代替案と不採用理由: 訪問済みノード参照を `Set` で保持する案は実装は直感的だが、追加メモリが `O(n)` となり問題の定数メモリ条件に合わないため不採用。ノード書き換え案は入力破壊を伴うため不採用。
- レビューでの合意事項: 実務では静的解析前提のため、実行時に起きにくいケースでも `null` チェックを明示し、型安全性を優先する。
