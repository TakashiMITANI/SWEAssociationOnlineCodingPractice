# レビュー依頼テンプレート

Discord でレビュー依頼するときのテンプレートです。

## 依頼先

- レビュー依頼先: `<reviewer-or-channel>`

例:

- `@reviewer-name`
- `#leetcode-review`

## Discord 投稿文テンプレート

```text
お世話になっております。
{problem-number}.{problem-slug} に取り組みました。
お手すきの際にレビューをお願いします。

問題：{problem-url}
PR：{pr-url}
言語：TypeScript
```

## 補足

- 送信前に `{problem-number}`, `{problem-slug}`, `{problem-url}`, `{pr-url}` を置換する
- 運用ルールとして「10分以内・ノーエラーを3回連続達成後」にレビュー依頼する
