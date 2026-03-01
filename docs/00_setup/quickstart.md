# Quickstart

この手順で、初回セットアップから1問分の運用を最短で開始できます。

## 1. Setup

```bash
gh --version
gh auth status
npm --version
```

未ログインなら:

```bash
gh auth login -h github.com --git-protocol https --web
```

依存関係をインストール:

```bash
npm install
```

## 2. Create Issue

```bash
gh issue create \
  --title "[Task] two-sum" \
  --body "LeetCode: https://leetcode.com/problems/two-sum/" \
  --label type/learning-task \
  --label status/todo \
  --label priority/p2
```

作成したIssueをProjectへ追加:

```bash
gh project item-add <project-number> --owner <owner> --url <issue-url>
```

## 3. Create Branch and Directory

```bash
git switch -c solve/two-sum
mkdir -p solutions/leetcode/two-sum
cp -r solutions/leetcode/_template/. solutions/leetcode/two-sum/
```

## 4. Commit

```bash
git add .
git commit -m "solve: add workspace for two-sum (Refs #<issue-number>)"
git push -u origin solve/two-sum
```

## 5. Create PR

```bash
gh pr create \
  --title "solve: two-sum" \
  --body "Refs #<issue-number>"
```

## 6. Merge and Cleanup

- `solve/*` は `Squash and merge` で `main` にマージする
- Issue に検証結果や必要なメモをコメントする
- Issue を `status/done` に更新後、クローズ時に `status/closed` へ更新する
- マージ後にブランチを削除する
