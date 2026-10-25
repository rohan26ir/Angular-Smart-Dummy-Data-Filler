import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Zap, Chrome, Menu, X, Shield, Sparkles } from 'lucide-angular';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <header class="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#07090e]/80 backdrop-blur-xl transition-all">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-brand to-emerald-400 p-[1px] shadow-lg shadow-brand/25 group-hover:scale-105 transition-transform">
            <div class="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <lucide-icon [img]="Zap" class="w-5 h-5 text-indigo-400 group-hover:text-emerald-400 transition-colors"></lucide-icon>
            </div>
          </div>
          <div>
            <span class="text-base font-bold tracking-tight text-white block group-hover:text-indigo-300 transition-colors">GhostInput</span>
            <span class="text-[10px] text-gray-400 font-mono tracking-wider uppercase block">Smart Dummy Filler</span>
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a routerLink="/" fragment="features" class="hover:text-white transition-colors">Features</a>
          <a routerLink="/" fragment="demo" class="hover:text-white transition-colors flex items-center gap-1.5">
            <span>Interactive Demo</span>
            <span class="px-1.5 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">Live</span>
          </a>
          <a routerLink="/" fragment="comparison" class="hover:text-white transition-colors">Why Smart Filler</a>
          <a routerLink="/" fragment="faq" class="hover:text-white transition-colors">FAQ</a>
          <a routerLink="/privacy" class="hover:text-white transition-colors">Privacy</a>
        </nav>

        <!-- CTA Action -->
        <div class="hidden md:flex items-center gap-4">
          <a 
            href="https://chromewebstore.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand via-indigo-600 to-indigo-700 hover:brightness-110 text-white text-sm font-semibold flex items-center gap-2.5 shadow-lg shadow-brand/25 transition-all active:scale-95 border border-white/10"
          >
            <lucide-icon [img]="Chrome" class="w-4 h-4"></lucide-icon>
            <span>Add to Chrome - Free</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          (click)="menuOpen.set(!menuOpen())" 
          aria-label="Toggle navigation menu"
          class="md:hidden text-gray-400 hover:text-white p-2 rounded-lg bg-surface-100 border border-white/10"
        >
          <lucide-icon [img]="menuOpen() ? X : Menu" class="w-5 h-5"></lucide-icon>
        </button>
      </div>

      <!-- Mobile Dropdown -->
      @if (menuOpen()) {
        <div class="md:hidden border-b border-white/[0.08] bg-[#0b0f19] px-6 py-6 flex flex-col gap-4 animate-fadeIn">
          <a routerLink="/" fragment="features" (click)="menuOpen.set(false)" class="text-gray-300 hover:text-white py-1">Features</a>
          <a routerLink="/" fragment="demo" (click)="menuOpen.set(false)" class="text-gray-300 hover:text-white py-1">Interactive Demo</a>
          <a routerLink="/" fragment="comparison" (click)="menuOpen.set(false)" class="text-gray-300 hover:text-white py-1">Why Smart Filler</a>
          <a routerLink="/" fragment="faq" (click)="menuOpen.set(false)" class="text-gray-300 hover:text-white py-1">FAQ</a>
          <a routerLink="/privacy" (click)="menuOpen.set(false)" class="text-gray-300 hover:text-white py-1">Privacy Policy</a>
          <a routerLink="/terms" (click)="menuOpen.set(false)" class="text-gray-300 hover:text-white py-1">Terms of Service</a>
          <a 
            href="https://chromewebstore.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3 rounded-xl bg-brand text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand/20 mt-2"
          >
            <lucide-icon [img]="Chrome" class="w-4 h-4"></lucide-icon>
            Add to Chrome - Free
          </a>
        </div>
      }
    </header>
  `
})
export class HeaderComponent {
  readonly Zap = Zap;
  readonly Chrome = Chrome;
  readonly Menu = Menu;
  readonly X = X;
  readonly Shield = Shield;
  readonly Sparkles = Sparkles;
  menuOpen = signal(false);
}
