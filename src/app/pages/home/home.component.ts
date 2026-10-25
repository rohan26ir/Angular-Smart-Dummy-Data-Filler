import { Component } from '@angular/core';
import { LucideAngularModule, Chrome, ArrowUpRight } from 'lucide-angular';
import { GhostinputHeroComponent } from '../../components/non-reusable/ghostinput-hero.component';
import { InteractiveDemoComponent } from '../../components/non-reusable/interactive-demo.component';
import { BentoFeaturesComponent } from '../../components/non-reusable/bento-features.component';
import { ComparisonTableComponent } from '../../components/non-reusable/comparison-table.component';
import { FaqAccordionComponent } from '../../components/non-reusable/faq-accordion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LucideAngularModule,
    GhostinputHeroComponent,
    InteractiveDemoComponent,
    BentoFeaturesComponent,
    ComparisonTableComponent,
    FaqAccordionComponent
  ],
  template: `
    <div class="relative w-full text-white font-inter">
      <!-- Framed Hero Section (Matching all other sections) -->
      <app-ghostinput-hero />

      <!-- Live Interactive Demo Section -->
      <app-interactive-demo />

      <!-- Architecture Bento Features -->
      <app-bento-features />

      <!-- Competitive Comparison Matrix -->
      <app-comparison-table />

      <!-- FAQ Accordion -->
      <app-faq-accordion />

      <!-- Bottom High-Conversion Banner Section -->
      <section class="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 relative z-20">
        <div class="border border-white/20 bg-black/85 backdrop-blur-xl p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50 px-3 py-1 border border-white/10 bg-white/5">
            Instant Developer Utility · Manifest V3
          </div>
          <h3 class="font-podium text-white text-3xl sm:text-6xl uppercase tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to 10x Your QA Testing Speed?
          </h3>
          <p class="text-white/60 max-w-lg mx-auto text-sm sm:text-base font-inter">
            Install GhostInput today. 100% Free, zero external network telemetry, and instant setup.
          </p>
          <div class="pt-4 flex justify-center">
            <a
              href="https://chromewebstore.google.com"
              target="_blank"
              rel="noopener noreferrer"
              class="group inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-black px-8 py-4 text-xs font-inter font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-xl"
            >
              <lucide-icon [img]="Chrome" class="w-4 h-4"></lucide-icon>
              <span>INSTALL EXTENSION FROM WEB STORE</span>
              <lucide-icon [img]="ArrowUpRight" class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></lucide-icon>
            </a>
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent {
  readonly Chrome = Chrome;
  readonly ArrowUpRight = ArrowUpRight;
}
