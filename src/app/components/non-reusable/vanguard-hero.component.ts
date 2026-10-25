import { Component } from '@angular/core';
import { LucideAngularModule, Crown, Award, ArrowUpRight } from 'lucide-angular';
import { CtaButtonComponent } from '../reusable/cta-button.component';
import { StatBadgeComponent } from '../reusable/stat-badge.component';

@Component({
  selector: 'app-vanguard-hero',
  standalone: true,
  imports: [LucideAngularModule, CtaButtonComponent, StatBadgeComponent],
  template: `
    <div class="w-full flex flex-col justify-center max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12">
      <!-- 1. Tagline (Crown Icon + World-Class Digital Collective) -->
      <div class="animate-fade-up mb-6 lg:mb-8 flex items-center gap-3">
        <lucide-icon [img]="Crown" class="w-4 h-4 text-white/70"></lucide-icon>
        <span class="text-white/70 text-xs sm:text-sm font-inter tracking-[0.3em] uppercase font-medium">
          World-Class Digital Collective
        </span>
      </div>

      <!-- 2. Main Heading (Design. Disrupt. Conquer.) -->
      <h1 class="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight flex flex-col select-none">
        <span class="text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
        <span class="text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
        <span class="text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
      </h1>

      <!-- 3. Subtext -->
      <p class="animate-fade-up-delay-2 text-white/70 text-sm sm:text-base font-inter leading-relaxed max-w-md mt-6 lg:mt-8">
        We build fierce brand identities<br class="hidden sm:inline" />
        that don't just turn heads — <strong class="font-bold text-white">they lead.</strong>
      </p>

      <!-- 4. CTA Row (SEE OUR WORK + Award Badge) -->
      <div class="animate-fade-up-delay-3 mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
        <app-cta-button
          text="SEE OUR WORK"
          variant="black"
          href="#projects"
          [showArrow]="true"
        />

        <!-- Award Badge (hidden on mobile, visible sm+) -->
        <div class="hidden sm:flex items-center gap-3 pl-2 sm:pl-4 border-l border-white/15">
          <lucide-icon [img]="Award" class="w-8 h-8 text-white/50 flex-shrink-0"></lucide-icon>
          <div class="flex flex-col text-white/60 text-xs tracking-wider uppercase font-inter leading-tight">
            <span class="font-semibold text-white/80">Top-Rated</span>
            <span>Brand Studio</span>
          </div>
        </div>
      </div>

      <!-- 5. Stats Row (250+ Brands, 95% Retention, 10+ Years) -->
      <div class="animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14 flex flex-wrap gap-6 sm:gap-12 lg:gap-16 pt-4 border-t border-white/10 max-w-3xl">
        <app-stat-badge
          value="250+"
          label="Brands Transformed"
        />
        <app-stat-badge
          value="95%"
          label="Client Retention"
        />
        <app-stat-badge
          value="10+"
          label="Years in the Game"
        />
      </div>
    </div>
  `
})
export class VanguardHeroComponent {
  readonly Crown = Crown;
  readonly Award = Award;
  readonly ArrowUpRight = ArrowUpRight;
}
