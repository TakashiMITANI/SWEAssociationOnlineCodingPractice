# Environment Setup

このドキュメントは、ローカルで GitHub Issue / PR を Codex と運用するための環境構築手順です。

## Prerequisites

- Ubuntu（このリポジトリの標準実行環境）
- Git が利用可能
- GitHub リポジトリへの書き込み権限
- インターネット接続

## GitHub CLI (gh) Install

Ubuntu:

```bash
sudo apt-get update
sudo apt-get install -y gh
gh --version
```

## Authentication

```bash
gh auth login
gh auth status
```

認証時は対象アカウントでこのリポジトリへアクセス可能な権限を選択してください。

対話例（マスキング済み）:

```text
? What account do you want to log into? GitHub.com
? What is your preferred protocol for Git operations on this host? HTTPS
? Authenticate Git with your GitHub credentials? Yes
? How would you like to authenticate GitHub CLI? Login with a web browser

! First copy your one-time code: ****-****
Press Enter to open github.com in your browser...
! Failed opening a web browser at https://github.com/login/device
  ... (browser launcher not found)
  Please try entering the URL in your browser manually

✓ Authentication complete.
✓ Configured git protocol
✓ Logged in as <masked-user>
```

注意:

- ワンタイムコード、トークン、メールアドレス、ユーザー名はドキュメントに生値で残さない
- ログを共有する場合は `****` や `<masked-user>` でマスキングする
- `Authentication credentials saved in plain text` が表示された場合は保存先の取り扱いに注意する

## Recommended Repository Settings

- `main` ブランチ保護を有効化
- マージ方式で `Squash and merge` を有効化
- 不要なら `Merge commit` / `Rebase merge` を無効化

初期設定チェックリスト:

- `Require a pull request before merging` を有効化
- `Require approvals` を 0 に設定（現運用）
- `Require status checks to pass before merging` を有効化
- `Block force pushes` / `Block deletions` を有効化
- `.github/pull_request_template.md` と `.github/ISSUE_TEMPLATE/learning-task.yml` が有効であることを確認
- Project (`Arai60 Progress Board`) を作成し、Issue運用で利用する

## Initial Label Setup

最初に GitHub 上で次のラベルを作成してください。

- `status/todo`, `status/in-progress`, `status/in-review`, `status/review-fix`, `status/done`, `status/closed`
- `priority/p0`, `priority/p1`, `priority/p2`, `priority/p3`
- `type/learning-task`, `type/bug`, `type/docs`, `type/chore`

ラベル運用の詳細は `docs/10_workflow/issue-labels.md` を参照してください。

一括作成する場合:

```bash
scripts/setup-labels.sh <owner> <repo>
```

## Issue Form Configuration

- `.github/ISSUE_TEMPLATE/config.yml` で blank issue を無効化
- Web UIでは `Learning Task` フォーム経由で Issue を作成する
- CLIでは `gh issue create` で必須ラベル（`type/learning-task`, `status/todo`, `priority/p2`）を付けて作成する

## Project Board Setup

- `Arai60 Progress Board` を作成する
- 運用は `docs/10_workflow/project-board-operations.md` に従う

## Optional but Recommended

- `docs/00_setup/quickstart.md` をチームに共有する
- テンプレート利用時は `docs/00_setup/template-repository-setup.md` に従う
