import { Component } from '@angular/core';
import { LucideAngularModule, Crown, Award, ArrowUpRight, Chrome, Zap } from 'lucide-angular';
import { StatBadgeComponent } from '../reusable/stat-badge.component';

@Component({
  selector: 'app-ghostinput-hero',
  standalone: true,
  imports: [LucideAngularModule, StatBadgeComponent],
  template: `
    <section class="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 sm:py-20 relative z-20">
      <!-- Framed Container matching all other sections -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
        <!-- Ambient Decorative Glow -->
        <div class="absolute -top-32 -right-32 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none"></div>

        <!-- 1. Tagline Pill -->
        <div class="animate-fade-up inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-white/15 bg-white/5 text-white/80 text-xs sm:text-sm font-inter tracking-[0.25em] uppercase font-medium mb-8">
          <lucide-icon [img]="Crown" class="w-4 h-4 text-emerald-400"></lucide-icon>
          <span>Manifest V3 Production Build · Press Alt + Shift + F</span>
        </div>

        <!-- 2. Main Heading in font-podium -->
        <h1 class="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight flex flex-col select-none mb-6">
          <span class="text-4xl sm:text-6xl lg:text-7xl">Automate.</span>
          <span class="text-4xl sm:text-6xl lg:text-7xl">Accelerate.</span>
          <span class="text-4xl sm:text-6xl lg:text-7xl">Conquer.</span>
        </h1>

        <!-- 3. Subtext -->
        <p class="animate-fade-up-delay-2 text-white/70 text-sm sm:text-base lg:text-lg font-inter leading-relaxed max-w-2xl mb-10">
          Stop typing <span class="text-white font-mono bg-white/10 px-2 py-0.5 rounded">asdf&#64;test.com</span> manually.
          Intelligently hydrate inputs, password pairs, custom dropdowns, and shadow DOM elements with context-aware data in
          <strong class="font-bold text-white">&lt; 50ms.</strong>
        </p>

        <!-- 4. CTA Row -->
        <div class="animate-fade-up-delay-3 flex flex-wrap items-center gap-4 sm:gap-6 pb-12 border-b border-white/10">
          <a
            href="https://chromewebstore.google.com"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2.5 bg-white hover:bg-neutral-200 text-black font-inter text-xs font-bold tracking-widest uppercase px-7 py-4 transition-all duration-300 active:scale-95 shadow-xl"
          >
            <lucide-icon [img]="Chrome" class="w-4 h-4"></lucide-icon>
            <span>ADD TO CHROME - FREE</span>
            <lucide-icon
              [img]="ArrowUpRight"
              class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            ></lucide-icon>
          </a>

          <a
            href="#demo"
            class="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 px-7 py-4 text-xs tracking-widest uppercase text-white hover:bg-white/10 transition-all duration-300 active:scale-95 font-inter font-semibold"
          >
            <lucide-icon [img]="Zap" class="w-4 h-4 text-emerald-400"></lucide-icon>
            <span>TRY LIVE PLAYGROUND</span>
          </a>

          <!-- Award Badge (Commented Out)
          <div class="hidden sm:flex items-center gap-3 pl-4 border-l border-white/15">
            <lucide-icon [img]="Award" class="w-8 h-8 text-white/50 flex-shrink-0"></lucide-icon>
            <div class="flex flex-col text-white/60 text-xs tracking-wider uppercase font-inter leading-tight">
              <span class="font-semibold text-white/90">Top-Rated</span>
              <span>QA &amp; Dev Tool</span>
            </div>
          </div>
          -->
        </div>

        <!-- 5. Stats Grid (Integrated inside the hero section card) -->
        <div class="animate-fade-up-delay-4 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">
          <app-stat-badge
            value="< 50ms"
            label="Form Fill Speed"
          />
          <app-stat-badge
            value="React 19"
            label="Fiber Tracker Bypass"
          />
          <app-stat-badge
            value="100%"
            label="Client-Side Privacy"
          />
          <app-stat-badge
            value="0 Remote"
            label="Zero Telemetry CDN"
          />
        </div>
      </div>
    </section>
  `
})
export class GhostinputHeroComponent {
  readonly Crown = Crown;
  readonly Award = Award;
  readonly ArrowUpRight = ArrowUpRight;
  readonly Chrome = Chrome;
  readonly Zap = Zap;
}
