# Commit Rules

このドキュメントは、コミットと Issue を必ず関連付けるためのルールを定義します。

## Basic Rule

- すべてのコミットメッセージに Issue 番号を含める
- 形式は `Refs #<issue-number>` を必須とする
- コミットメッセージ（subject/body）は日本語で記述する

例:

- `solve: add hashmap solution for two-sum (Refs #12)`
- `docs: update arai60 progress table (Refs #12)`

## Closing Rule

- PR本文には `Refs #<issue-number>` を記載する
- `main` マージ後は `status/done` を確認してから Issue をクローズする
- コミット内でも PR本文でも `Closes` は使わない

## Language Rule

- Issue のタイトル・本文・コメントは日本語で記述する
- PR のタイトル・本文・コメントは日本語で記述する
- コミットメッセージは日本語で記述する
- 例外として、コード識別子・コマンド・URL・外部仕様名（例: `TypeScript`, `LeetCode`）は英語表記を許容する

## Commit Message Format

推奨フォーマット:

- `<type>: <summary> (Refs #<issue-number>)`

`type` 例:

- `solve`
- `fix`
- `chore`
- `docs`
- `test`

## Exceptions

- 緊急時を除き、Issue 番号なしコミットは禁止
- 例外コミットを行った場合、直後のコミットまたは PR 説明で理由を明記する
