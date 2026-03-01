# Project Board Operations

このドキュメントは `Arai60 Progress Board` の運用ルールを定義します。

## Board

- Project名: `Arai60 Progress Board`
- カード単位: 1 Issue = 1 問題

## Columns

- `Todo`
- `In Progress`
- `In Review`
- `Review Fix`
- `Done`
- `Closed`

## Label Mapping

Projectの列は `status/*` ラベルと対応させます。

- `status/todo` -> `Todo`
- `status/in-progress` -> `In Progress`
- `status/in-review` -> `In Review`
- `status/review-fix` -> `Review Fix`
- `status/done` -> `Done`
- `status/closed` -> `Closed`

## Transition Rule

標準遷移:

- `Todo` -> `In Progress` -> `In Review` -> `Review Fix` -> `In Review` -> `Done` -> `Closed`

更新タイミング:

- Issue作成時: `status/todo`
- 実装開始時: `status/in-progress`
- PR作成時: `status/in-review`
- レビュー修正時: `status/review-fix`
- 修正後に再レビュー依頼時: `status/in-review`
- `main` マージ時: `status/done`
- Issueクローズ時: `status/closed`

## Priority Handling

- `priority/p0` 〜 `priority/p3` は Issue ラベルで管理する
- Board上では必要に応じて Priority フィールドを追加する

## Manual Operation Checklist

1. Issue作成時に Board へ追加
2. `status/*` を最新に更新
3. PR作成時に `status/in-review` を確認
4. レビュー指摘対応中は `status/review-fix` に更新する
5. 再レビュー依頼時に `status/in-review` に戻す
6. マージ後に `status/done` へ更新
7. クローズ時に `status/closed` へ更新
