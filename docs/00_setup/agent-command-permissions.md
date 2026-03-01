# Agent Command Permissions

このドキュメントは、Issue / PR / コミット運用を AI エージェントへ委譲するためのコマンド許可方針を定義します。

## Goal

- 日常運用（Issue作成、PR作成、コミット、進捗更新）をエージェントが継続実行できる状態にする

## Recommended Approved Prefixes

以下を許可対象とします。

- `gh issue`
- `gh pr`
- `gh project`
- `git add`
- `git commit`
- `git push`
- `git pull`
- `git fetch`
- `git switch`

## Not Allowed Prefixes

以下は許可しません。

- `git reset --hard`
- `git checkout --`
- `git clean -fd`
- `rm -rf`

## Security Rule

- トークン、ワンタイムコード、メールアドレス、ユーザー名はログ共有時にマスキングする
- 破壊的操作はユーザーの明示指示がある場合のみ実行する

## Operation Rule

- コミットメッセージは `docs/10_workflow/commit-rules.md` に従い `Refs #<issue-number>` を必須とする
- PR運用は `docs/10_workflow/branch-strategy.md` に従う
- Issueラベル運用は `docs/10_workflow/issue-labels.md` に従う

