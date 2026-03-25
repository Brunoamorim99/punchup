#!/usr/bin/env bash
set -euo pipefail

SRC="/Users/brunoamorim/Bcit 2026/Final project /cursor-portfolio/public"
DST="/Users/brunoamorim/Bcit 2026/punchup/public"

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
