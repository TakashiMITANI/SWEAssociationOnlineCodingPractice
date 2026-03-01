# Contributing Guide

このリポジトリは、arai60 に取り組むための運用テンプレートです。
課題の解答は各参加者が実装し、AI エージェントは運用補助に限定します。

## Before Start

1. `docs/00_setup/environment-setup.md` を実施する
2. `docs/00_setup/quickstart.md` を確認する
3. `docs/10_workflow/branch-strategy.md` を確認する
4. `docs/10_workflow/commit-rules.md` を確認する
5. `docs/10_workflow/issue-labels.md` を確認する

## Standard Flow (1 Problem)

1. Issue を作成（`type/learning-task`, `status/todo`, `priority/p2`）
2. ブランチ作成: `solve/{problem-slug}`
3. ディレクトリ作成: `solutions/leetcode/{problem-slug}/`
4. 実装と検証を実施
5. コミット（`Refs #<issue-number>` 必須）
6. PR作成（`Refs #<issue-number>` を本文に記載）
7. `solve/*` を `Squash and merge` で `main` にマージ
8. Issue に検証結果と必要なメモをコメントし、`status/done` に更新
9. Issue をクローズして `status/closed` に更新
10. ブランチ削除

## Required Rules

- `main` へ直接 push しない
- 問題の解答に関する質問を AI へ依頼しない
- Issue / PR / コミットの関連付けを必ず行う
- Issue / PR / コミットメッセージ（必要なコメント含む）は日本語で記述する
- 学習課題 Issue は `.github/ISSUE_TEMPLATE/learning-task.yml` 準拠で作成・更新する

## Issue DoD / Close Rule

- Issue の Learning Progress Checklist と PR/Review/Close のチェック項目を更新しながら進める
- `status/done` は次を満たしたときにのみ付与する:
  - 対象PRが `main` にマージ済み
  - 検証結果と必要なメモを Issue コメントに記録済み
  - PR チェックリストが完了
- Issue は `status/done` を確認してから `status/closed` に更新してクローズする
