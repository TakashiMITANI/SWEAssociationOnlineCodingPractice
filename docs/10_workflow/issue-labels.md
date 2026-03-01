# Issue Label Strategy

Issue の進捗はラベルベースで管理します。

## Label Groups

以下のグループで運用します。

- `status/*`: 進捗状態（必須・単一選択）
- `priority/*`: 優先度（必須・単一選択）
- `type/*`: タスク種別（必須・単一選択）

## Required Labels

### status

- `status/todo`: 着手前
- `status/in-progress`: 実装中
- `status/in-review`: PR作成済み・レビュー中
- `status/review-fix`: レビュー指摘対応中
- `status/done`: 実装完了かつ検証結果・必要メモの記録が完了
- `status/closed`: クローズ済み

### priority

- `priority/p0`: 最優先（最短対応）
- `priority/p1`: 高
- `priority/p2`: 中（通常）
- `priority/p3`: 低

### type

- `type/learning-task`: 学習課題
- `type/bug`: 不具合対応
- `type/docs`: ドキュメント更新
- `type/chore`: 雑務・運用整備

## Transition Rule

標準遷移:

- `status/todo` -> `status/in-progress` -> `status/in-review` -> `status/review-fix` -> `status/in-review` -> `status/done` -> `status/closed`

運用ルール:

- `status/*` は常に1つだけ付ける
- `priority/*` は常に1つだけ付ける
- `type/*` は常に1つだけ付ける
- PR作成時に `status/in-review` へ変更する
- レビュー指摘対応中は `status/review-fix` へ変更し、再レビュー依頼時に `status/in-review` へ戻す
- PRが `main` へマージされたら `status/done` に変更し、Issueをクローズ時に `status/closed` へ変更する

## Codex Operation Rule

- Codex は Issue 作成時に `status/todo`、`priority/p2`、`type/learning-task` を初期値として付与する
- 進捗イベント（着手、PR作成、マージ、クローズ）ごとにラベルを更新する
- 解答そのものに関する依頼には対応せず、Issue運用のみ対応する

## Bootstrap

ラベルを一括作成・更新する場合は次を利用します。

```bash
scripts/setup-labels.sh <owner> <repo>
```
