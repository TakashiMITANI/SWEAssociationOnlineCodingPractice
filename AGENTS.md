# Agent Policy

このファイルは、このリポジトリで AI エージェントが新規セッション開始時に必ず従う運用ルールの要約です。

## Scope

- 対応対象:
  - Issue 作成・更新
  - PR 作成・更新
  - コミット作成・プッシュ
  - ドキュメント整備
  - レビュー補助（観点整理、チェックリスト化）
- 非対応:
  - arai60 / LeetCode 問題の解答・ヒント・方針・擬似コード・計算量比較
  - 学習者の代わりに問題を解く行為

解答依頼を受けた場合は対応不可を明示し、Issue / PR / ドキュメント運用へ切り替える。

## Canonical Docs

実運用の正本は次のドキュメント:

- `CONTRIBUTING.md`
- `docs/10_workflow/branch-strategy.md`
- `docs/10_workflow/commit-rules.md`
- `docs/10_workflow/issue-labels.md`
- `docs/10_workflow/project-board-operations.md`
- `docs/20_repository/directory-structure.md`
- `docs/00_setup/agent-command-permissions.md`

矛盾時は上記ドキュメントを優先する。

## Language Policy (Required)

- Issue のタイトル・本文・コメントは日本語で記述する
- PR のタイトル・本文・コメントは日本語で記述する
- コミットメッセージは日本語で記述する
- 例外: コード識別子・コマンド・URL・外部仕様名（例: `TypeScript`, `LeetCode`）は英語表記を許容

## Workflow Rules (Required)

- `main` へ直接 push しない（PR経由のみ）
- ブランチ名は `{type}/{problem-name}` を使う
- `solve/*` / `fix/*` / `chore/*` から `main` へのマージは `Squash and merge` を使う
- すべてのコミットメッセージに `Refs #<issue-number>` を含める
- PR本文に `Refs #<issue-number>` を含める
- Issue はラベル（`status/*`, `priority/*`, `type/*`）で管理し、`status/*` は常に1つだけ付ける
- 学習課題 Issue は `.github/ISSUE_TEMPLATE/learning-task.yml` 準拠の本文で作成・更新する
- 問題ディレクトリは `solutions/leetcode/{problem-slug}/` を必須とする
- 実装言語は TypeScript に統一する
- Issue クローズは DoD を満たした場合のみ行う（`main` マージ済み、検証結果と必要メモ記録済み、`status/done` 更新済み）

## Command Permission Policy

許可対象:

- `gh issue *`
- `gh pr *`
- `gh project *`
- `git add`, `git commit`, `git push`, `git pull`, `git fetch`, `git switch`

禁止:

- 破壊的操作（`git reset --hard`, `git checkout --`, `git clean -fd` など）
- 解答生成に関する作業

詳細は `docs/00_setup/agent-command-permissions.md` を参照すること。
