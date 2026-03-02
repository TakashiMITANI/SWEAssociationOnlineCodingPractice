# Directory Structure

問題の実装は次の固定パスで管理します。

- `solutions/leetcode/{problem-slug}/`

このリポジトリでは実装言語を TypeScript に統一します。

## Naming Rule

- `{problem-slug}` は LeetCode URL の slug をそのまま使う
- 形式は `kebab-case` のみ（英小文字、数字、`-`）
- ブランチ名 `solve/{problem-name}` の `{problem-name}` と同一にする

例:

- URL: `https://leetcode.com/problems/two-sum/`
- Branch: `solve/two-sum`
- Directory: `solutions/leetcode/two-sum/`

## Per-Problem Layout

各問題ディレクトリの標準構成:

- `README.md`: 問題リンク、実行方法、最終決定事項（実装根拠）
- `solution-target.ts`: テストが参照する集約ファイル（実行対象の切り替え窓口）
- `solution-1st.ts`: 1回目の実装（任意）
- `solution-2nd.ts`: 2回目の実装（任意）
- `solution-3rd.ts`: 3回目の実装（任意）
- `solution.ts`: 単一ファイルで進める場合の解答コード（任意）
- `solution.test.ts`: テストコード（必要に応じて）

テンプレート:

- `solutions/leetcode/_template/README.md`
- `solutions/leetcode/_template/solution.ts`
- `solutions/leetcode/_template/solution-target.ts`
- `solutions/leetcode/_template/solution.test.ts`

## Rules

- 1問題につき1ディレクトリ
- 試行を分ける場合は `solution-1st.ts`, `solution-2nd.ts`, `solution-3rd.ts` の命名を使う
- テスト対象の切り替えは `solution-target.ts` の import 先変更で行う
- 問題ディレクトリ名に番号プレフィックスは付けない
- 空ディレクトリはコミットしない
- 思考過程の詳細は Issue コメントで管理する
- レビュー時の実装根拠は PR で説明する
- 最終的な決定事項（採用した方針、計算量、トレードオフ）は `README.md` に反映し、リポジトリに残す
