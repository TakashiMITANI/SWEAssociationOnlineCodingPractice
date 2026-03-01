#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   scripts/setup-labels.sh [owner] [repo]
# Example:
#   scripts/setup-labels.sh my-org my-repo

if [ "$#" -lt 2 ]; then
  echo "usage: scripts/setup-labels.sh <owner> <repo>" >&2
  exit 1
fi

OWNER="$1"
REPO="$2"
TARGET="${OWNER}/${REPO}"

upsert_label() {
  local name="$1"
  local color="$2"
  local desc="$3"

  if gh label create "$name" --color "$color" --description "$desc" -R "$TARGET" >/dev/null 2>&1; then
    echo "created: $name"
  else
    gh label edit "$name" --color "$color" --description "$desc" -R "$TARGET" >/dev/null
    echo "updated: $name"
  fi
}

# status/*
upsert_label "status/todo" "D4C5F9" "着手前"
upsert_label "status/in-progress" "1D76DB" "実装中"
upsert_label "status/in-review" "FBCA04" "PR作成済み・レビュー中"
upsert_label "status/review-fix" "C2E0C6" "レビュー指摘対応中"
upsert_label "status/done" "2DA44E" "完了"
upsert_label "status/closed" "6E7781" "クローズ済み"

# priority/*
upsert_label "priority/p0" "B60205" "最優先"
upsert_label "priority/p1" "D93F0B" "高"
upsert_label "priority/p2" "FBCA04" "中"
upsert_label "priority/p3" "0E8A16" "低"

# type/*
upsert_label "type/learning-task" "5319E7" "学習課題"
upsert_label "type/bug" "D73A4A" "不具合対応"
upsert_label "type/docs" "0075CA" "ドキュメント更新"
upsert_label "type/chore" "CFD3D7" "雑務・運用整備"

echo "label setup complete for ${TARGET}"
