# Template Repository Setup

このリポジトリをテンプレートとして使い、誰でも arai60 を開始できる状態を作る手順です。

## 1. Create from Template

1. GitHub で `Use this template` を選択
2. 新規リポジトリを作成
3. ローカルへ clone

## 2. Required GitHub Settings

1. `main` ブランチ保護を設定
2. `Squash and merge` を有効化
3. Issue ラベルを作成（`status/*`, `priority/*`, `type/*`）
4. `Arai60 Progress Board` を作成（任意だが推奨）

## 3. Local Setup

1. `gh` をインストール
2. `gh auth login` を実行
3. `gh auth status` で確認
4. `scripts/setup-labels.sh <owner> <repo>` でラベルを初期化

## 4. First Task

1. `Learning Task` Issue を作成
2. `solve/{problem-slug}` ブランチを作成
3. `solutions/leetcode/{problem-slug}/` を作成
4. PR を作成して `Squash and merge`

## 5. Reference

- `docs/00_setup/environment-setup.md`
- `docs/00_setup/quickstart.md`
- `docs/10_workflow/branch-strategy.md`
- `docs/10_workflow/commit-rules.md`
- `docs/10_workflow/issue-labels.md`
- `docs/10_workflow/project-board-operations.md`
