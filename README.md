# SWE Association Online Coding Practice

このリポジトリは、[一般社団法人ソフトウェアエンジニアリング協会 (SWE)](https://www.swe.or.jp/) のオンラインコーディング練習用リポジトリです。

## Purpose

- コーディング課題の作成・管理
- 解答例や検証コードの管理
- 学習用メモ・運用ルールの集約

## Structure

- `docs/`: 運用ドキュメント
- `docs/README.md`: ドキュメントカテゴリ一覧
- `docs/00_setup/`: 環境構築・初期設定
- `docs/10_workflow/`: ブランチ/コミット/Issue などの運用ルール
- `docs/20_repository/`: リポジトリ構成ルール
- `solutions/leetcode/{problem-slug}/`: 問題ごとの解答ディレクトリ
- `solutions/leetcode/_template/`: TypeScript 用の問題テンプレート

## Documentation

最初に読むドキュメント:

- `docs/00_setup/quickstart.md`
- `docs/00_setup/environment-setup.md`
- `CONTRIBUTING.md`
- `AGENTS.md`
- `AGENT.md`（互換エントリ）

運用ルールの詳細:

- `docs/10_workflow/branch-strategy.md`
- `docs/10_workflow/commit-rules.md`
- `docs/10_workflow/issue-labels.md`
- `docs/10_workflow/project-board-operations.md`
- `docs/20_repository/directory-structure.md`
- `docs/20_repository/arai60-problem-list.md`
- `docs/00_setup/agent-command-permissions.md`
- `docs/00_setup/template-repository-setup.md`
- `.codex/README.md`

運用の要点:

- `main` への直接 push はしない（PR経由のみ）
- ブランチ名は `{type}/{problem-name}`（例: `solve/two-sum`）
- `solve/*` から `main` へのマージは `Squash and merge` を必須とする
- `main` マージ後は作業ブランチを削除する
- コミットメッセージには `Refs #<issue-number>` を必須で含める
- Issue はラベルベースで管理する（`status/*`, `priority/*`, `type/*`）
- 問題ディレクトリは `solutions/leetcode/{problem-slug}/` 形式を必須とする
- 実装言語は TypeScript に統一する
- Codex は Issue / PR / ドキュメント運用にのみ使い、問題の解答関連質問は一切扱わない

## Arai60 Scope

このリポジトリで解く問題は `leetcode` の `arai60` に固定します。
対象問題の正本リストは次のドキュメントで管理します。

- `docs/20_repository/arai60-problem-list.md`

進捗管理は README ではなく Issue で行います。
思考過程・検討メモは Issue のコメント（GitHub Issue Comment）に記録します。

Issue ラベル運用:

- `status/todo`: 着手前
- `status/in-progress`: 実装中
- `status/in-review`: PR作成済み・レビュー中
- `status/review-fix`: レビュー指摘対応中
- `status/done`: 解答マージと検証記録が完了
- `status/closed`: クローズ済み

## Usage

1. `docs/10_workflow/branch-strategy.md` に従って課題用ブランチを作成する
2. `solutions/leetcode/{problem-slug}/` を作成し、`solutions/leetcode/_template/` をコピーする
3. 解答とテストを追加し、`npm run format:check` と `npm run lint` で確認する
4. PR を作成し、`main` にマージする
5. Issue を `status/done` に更新し、必要なメモをコメントに残す
6. マージ済みブランチを削除する
