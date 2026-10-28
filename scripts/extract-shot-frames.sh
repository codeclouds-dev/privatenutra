#!/usr/bin/env bash
# Export a replacement sequence; delivered scroll-v3 frames remain authoritative.
# Requires FFmpeg and installed app dependencies. Update framePath after export.
set -euo pipefail
cd "$(dirname "$0")/.."
CLIP="assets/source/shot-bottle-hero.mp4"
OUT="${1:?Usage: bash scripts/extract-shot-frames.sh public/motion/scroll-v4}"
if [[ -e "$OUT" ]]; then
  echo "Output already exists: $OUT" >&2
  exit 1
fi
mkdir -p "$OUT/frames" "$OUT/mobile"
SHOT_TMP="$(mktemp -d)"
trap 'rm -rf "$SHOT_TMP"' EXIT
# Keep the first 144 frames at native 24fps; the source has an extra end frame.
ffmpeg -v error -i "$CLIP" -vf fps=24 -frames:v 144 -start_number 0 "$SHOT_TMP/%03d.png"
node --input-type=module - "$SHOT_TMP" "$OUT" <<'JS'
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
const [source, output] = process.argv.slice(2);
const frames = (await readdir(source)).filter(file => /^\d{3}\.png$/.test(file)).sort();
if (frames.length !== 144) throw new Error(`Expected 144 frames, got ${frames.length}`);
for (const file of frames) {
  await Promise.all([['frames', 1280], ['mobile', 720]].map(([folder, width]) =>
    sharp(`${source}/${file}`).resize({ width }).webp({ quality: 82 }).toFile(`${output}/${folder}/${file.replace('.png', '.webp')}`)
  ));
}
console.log('Exported 144 wide and 144 mobile frames.');
JS
