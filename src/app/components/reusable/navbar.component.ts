import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Chrome, ArrowUpRight, Zap } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `
    <header class="w-full fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-16 py-5 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/[0.08]">
      <div class="max-w-[1400px] mx-auto flex items-center justify-between">
        <!-- Left: Brand Name in font-podium -->
        <a routerLink="/" class="flex items-center gap-3 group select-none flex-shrink-0">
          <div class="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
            <lucide-icon [img]="Zap" class="w-4 h-4 text-white group-hover:text-black transition-colors"></lucide-icon>
          </div>
          <span class="font-podium text-white font-bold uppercase text-2xl sm:text-3xl tracking-wider group-hover:text-white/80 transition-opacity">
            {{ brandName() }}
          </span>
        </a>

        <!-- Center: Core Menus including Privacy Policy -->
        <nav class="hidden md:flex items-center gap-6 lg:gap-10">
          @for (link of navLinks(); track link.label) {
            <a
              [routerLink]="link.href"
              routerLinkActive="text-white font-semibold after:scale-x-100"
              [routerLinkActiveOptions]="{ exact: link.exact ?? false }"
              class="relative font-inter text-xs tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 whitespace-nowrap"
            >
              {{ link.label }}
            </a>
          }
        </nav>

        <!-- Right: "ADD TO CHROME" CTA Button -->
        <div class="hidden sm:flex items-center gap-4 flex-shrink-0">
          <a
            [href]="ctaHref()"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 border border-white/30 hover:border-white/80 px-5 py-2.5 text-xs font-inter font-semibold tracking-widest uppercase text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            <lucide-icon [img]="Chrome" class="w-3.5 h-3.5"></lucide-icon>
            <span>{{ ctaText() }}</span>
            <lucide-icon
              [img]="ArrowUpRight"
              class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            ></lucide-icon>
          </a>
        </div>

        <!-- Right: Mobile Hamburger Button (visible below md) -->
        <button
          (click)="onToggleMenu()"
          class="md:hidden flex flex-col justify-center items-end space-y-1.5 p-2 focus:outline-none cursor-pointer"
          aria-label="Open mobile navigation menu"
        >
          <div class="w-6 h-0.5 bg-white transition-all"></div>
          <div class="w-6 h-0.5 bg-white transition-all"></div>
          <div class="w-4 h-0.5 bg-white transition-all"></div>
        </button>
      </div>
    </header>
  `
})
export class NavbarComponent {
  readonly Chrome = Chrome;
  readonly ArrowUpRight = ArrowUpRight;
  readonly Zap = Zap;

  brandName = input<string>('GHOSTINPUT');
  navLinks = input<{ label: string; href: string; exact?: boolean }[]>([
    { label: 'Features', href: '/features' },
    { label: 'About', href: '/about' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Help & Feedback', href: '/help-feedback' },
    { label: 'Privacy Policy', href: '/privacy' }
  ]);
  ctaText = input<string>('ADD TO CHROME');
  ctaHref = input<string>('https://chromewebstore.google.com');

  openMobileMenu = output<void>();

  onToggleMenu() {
    this.openMobileMenu.emit();
  }
}
