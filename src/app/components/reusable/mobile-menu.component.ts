import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, X, ArrowUpRight, Chrome, Zap } from 'lucide-angular';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <div
      class="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 md:hidden overflow-y-auto"
      [class.opacity-100]="open()"
      [class.visible]="open()"
      [class.opacity-0]="!open()"
      [class.invisible]="!open()"
      [class.pointer-events-auto]="open()"
      [class.pointer-events-none]="!open()"
    >
      <!-- Header Row -->
      <div class="flex items-center justify-between w-full border-b border-white/10 pb-4 flex-shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
            <lucide-icon [img]="Zap" class="w-4 h-4 text-white"></lucide-icon>
          </div>
          <span class="font-podium text-white font-bold uppercase text-2xl tracking-wider select-none">
            {{ brandName() }}
          </span>
        </div>
        <button
          (click)="onClose()"
          class="text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
          aria-label="Close menu"
        >
          <lucide-icon [img]="X" class="w-7 h-7"></lucide-icon>
        </button>
      </div>

      <!-- Center Nav Links -->
      <div class="flex flex-col items-center justify-center gap-5 my-auto py-8">
        @for (link of navLinks(); track link.label; let i = $index) {
          <a
            [routerLink]="link.href"
            routerLinkActive="text-white underline underline-offset-8 font-bold"
            [routerLinkActiveOptions]="{ exact: link.exact ?? false }"
            (click)="onClose()"
            class="font-podium text-2xl sm:text-3xl text-white/80 uppercase tracking-wider hover:text-white transition-all duration-500 select-none text-center"
            [style.transitionDelay]="(i * 50 + 60) + 'ms'"
            [style.opacity]="open() ? '1' : '0'"
            [style.transform]="open() ? 'translateY(0)' : 'translateY(15px)'"
          >
            {{ link.label }}
          </a>
        }

        <!-- Staggered ADD TO CHROME button -->
        <div
          class="mt-4 transition-all duration-500"
          [style.transitionDelay]="(navLinks().length * 50 + 60) + 'ms'"
          [style.opacity]="open() ? '1' : '0'"
          [style.transform]="open() ? 'translateY(0)' : 'translateY(15px)'"
        >
          <a
            href="https://chromewebstore.google.com"
            target="_blank"
            rel="noopener noreferrer"
            (click)="onClose()"
            class="inline-flex items-center gap-2.5 border border-white/40 hover:border-white px-8 py-3.5 text-xs font-semibold tracking-widest uppercase text-white hover:bg-white hover:text-black transition-colors"
          >
            <lucide-icon [img]="Chrome" class="w-4 h-4"></lucide-icon>
            <span>ADD TO CHROME - FREE</span>
            <lucide-icon [img]="ArrowUpRight" class="w-4 h-4"></lucide-icon>
          </a>
        </div>
      </div>

      <!-- Bottom Tagline in Mobile Menu -->
      <div class="text-center text-xs tracking-widest uppercase text-white/40 font-inter border-t border-white/10 pt-4 flex-shrink-0">
        Manifest V3 · Smart Dummy Data Filler
      </div>
    </div>
  `
})
export class MobileMenuComponent {
  readonly X = X;
  readonly ArrowUpRight = ArrowUpRight;
  readonly Chrome = Chrome;
  readonly Zap = Zap;

  open = input<boolean>(false);
  brandName = input<string>('GHOSTINPUT');
  navLinks = input<{ label: string; href: string; exact?: boolean }[]>([
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Help & Feedback', href: '/help-feedback' },
    { label: 'Privacy Policy', href: '/privacy' }
  ]);

  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
