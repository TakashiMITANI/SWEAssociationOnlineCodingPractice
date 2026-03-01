# Review Request Template

Discord でレビュー依頼するときのテンプレートです。

## Review Destination

- レビュー依頼先: `<reviewer-or-channel>`

例:

- `@reviewer-name`
- `#leetcode-review`

## Discord Message Template

```text
お世話になっております。
{problem-slug} に取り組みました。
お手すきの際にレビューをお願いします。

レビュー依頼先：{reviewer-or-channel}
問題：{problem-url}
PR：{pr-url}
言語：TypeScript
```

## Notes

- 送信前に `{problem-slug}`, `{reviewer-or-channel}`, `{problem-url}`, `{pr-url}` を置換する
- 運用ルールとして「10分以内・ノーエラーを3回連続達成後」にレビュー依頼する
