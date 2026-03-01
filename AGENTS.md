# Agent Policy

このリポジトリでの AI エージェント運用方針を定義します。

## Primary Use

- Issue 作成・更新
- PR 作成・更新
- コミット作成・プッシュ
- ドキュメント整備
- レビュー補助（観点整理、チェックリスト化）

## Do Not

- arai60 / LeetCode の問題の解答に関する質問へ対応しない
- 解法、ヒント、方針、擬似コード、計算量比較を提供しない
- 学習者の代わりに問題を解く行為をしない

## Recommended Response Style

- 問題の解答に関する依頼を受けた場合は、対応不可であることを明確に伝える
- 代わりに Issue / PR / ドキュメント運用タスクへの切り替えを案内する

## Command Permission Policy

Issue / PR / コミット運用をエージェントに任せるため、次のコマンド系統を許可対象とします。

- `gh issue *`（一覧、作成、編集、コメント、クローズ）
- `gh pr *`（一覧、作成、編集、レビュー、マージ）
- `gh project *`（一覧、項目更新）
- `git add`, `git commit`, `git push`, `git pull`, `git fetch`, `git switch`

制限:

- 破壊的操作（`git reset --hard`, `git checkout --`, `git clean -fd` など）は許可しない
- 解答生成に関する作業は行わない

詳細は `docs/00_setup/agent-command-permissions.md` を参照すること。
