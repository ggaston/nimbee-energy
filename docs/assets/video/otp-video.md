# opt video


### 1080 mpeg 

```
ffmpeg -y -i overlay_denoiser_src.mp4 -c:v libx264 -crf 23 -profile:v high -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an overlay_denoiser.mp4
```
### 1080 webm

```
ffmpeg -i overlay_denoiser_src.mp4 -c:v libvpx-vp9 -crf 4 -speed 3 -pix_fmt yuv420p -color_primaries 1 -color_trc 1 -colorspace 1 -movflags +faststart -an overlay_denoiser.webm
```
