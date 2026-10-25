import { Component, input } from '@angular/core';

@Component({
  selector: 'app-background-video',
  standalone: true,
  template: `
    <div class="fixed inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none">
      <video
        [src]="videoUrl()"
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover scale-105"
      ></video>
      <!-- Cinematic Vignette & Readability Gradient Overlay -->
      <div class="absolute inset-0 bg-black/55 backdrop-brightness-[0.85]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
    </div>
  `
})
export class BackgroundVideoComponent {
  videoUrl = input<string>(
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4'
  );
}
