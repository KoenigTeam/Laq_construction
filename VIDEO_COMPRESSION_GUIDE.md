# Video Compression Guide

The hero section now uses the LAQ construction video. To optimize performance, compress the video files using the steps below.

## Prerequisites

Install ffmpeg (if not already installed):

```bash
brew install ffmpeg
```

## Compression Steps

Run these commands from the project root:

```bash
cd /Users/texascrypto/laq_construction/Laq_construction-1

# 1. Compress MP4 for web (target: 2-3 MB)
ffmpeg -i public/videos/laq_video.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -preset slow \
  -vf scale=1920:-2 \
  -an \
  public/videos/laq_video_optimized.mp4

# 2. Create WebM version (better compression)
ffmpeg -i public/videos/laq_video_optimized.mp4 \
  -c:v libvpx-vp9 \
  -crf 30 \
  -b:v 0 \
  -an \
  public/videos/laq_video.webm

# 3. Extract poster frame (fallback image)
ffmpeg -i public/videos/laq_video_optimized.mp4 \
  -ss 00:00:02 \
  -vframes 1 \
  public/images/hero-poster.jpg

# 4. Verify compression success
ls -lh public/videos/laq_video* public/images/hero-poster.jpg
```

## Expected Results

- `laq_video_optimized.mp4`: ~2-3 MB (from 11.7 MB)
- `laq_video.webm`: ~1-2 MB
- `hero-poster.jpg`: fallback image for loading state

## Current Status

✅ Video integrated into hero section
✅ Design system alignment complete
⏳ Video compression pending (run commands above)
⏳ Poster frame extraction pending

The hero component will fall back to the uncompressed video (`laq_video.mp4`) until the optimized versions are created.

