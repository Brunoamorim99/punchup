#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="${1:-${ASSET_SOURCE_DIR:-}}"
DST="${2:-"$ROOT_DIR/public"}"

if [ -z "${SRC}" ]; then
  echo "Missing source directory."
  echo "Usage: npm run sync:assets -- \"/path/to/old-project/public\""
  echo "or set ASSET_SOURCE_DIR before running."
  exit 1
fi

mkdir -p "$DST"

if command -v rsync >/dev/null 2>&1; then
  rsync -a "$SRC"/ "$DST"/
else
  cp -R "$SRC"/. "$DST"/
fi

echo "Assets synced from:"
echo "  $SRC"
echo "to:"
echo "  $DST"
