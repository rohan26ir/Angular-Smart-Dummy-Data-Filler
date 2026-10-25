import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Zap, ShieldCheck, Heart, Github, Mail, ExternalLink } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <footer class="border-t border-white/[0.08] bg-[#05070a] pt-16 pb-12 mt-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/[0.06]">
          <!-- Column 1: Brand -->
          <div class="md:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-brand flex items-center justify-center shadow-lg shadow-brand/30">
                <lucide-icon [img]="Zap" class="w-4 h-4 text-white"></lucide-icon>
              </div>
              <span class="text-base font-bold text-white tracking-tight">GhostInput · Smart Dummy Data Filler</span>
            </div>
            <p class="text-sm text-gray-400 max-w-sm leading-relaxed">
              Production-grade reactive form hydrator for QA automation engineers and full-stack developers. Fill 200+ inputs in under 50ms with 100% local client-side execution.
            </p>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <lucide-icon [img]="ShieldCheck" class="w-3.5 h-3.5"></lucide-icon>
              <span>Zero telemetry. 100% client-side privacy.</span>
            </div>
          </div>

          <!-- Column 2: Navigation -->
          <div>
            <h4 class="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">Product</h4>
            <ul class="space-y-2.5 text-sm text-gray-400">
              <li><a routerLink="/" fragment="features" class="hover:text-white transition-colors">Features</a></li>
              <li><a routerLink="/" fragment="demo" class="hover:text-white transition-colors">Live Interactive Demo</a></li>
              <li><a routerLink="/" fragment="comparison" class="hover:text-white transition-colors">Why Smart Filler</a></li>
              <li><a routerLink="/" fragment="faq" class="hover:text-white transition-colors">FAQ</a></li>
              <li>
                <a href="https://chromewebstore.google.com" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Chrome Web Store</span>
                  <lucide-icon [img]="ExternalLink" class="w-3 h-3 text-gray-500"></lucide-icon>
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Legal & Trust -->
          <div>
            <h4 class="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">Compliance & Trust</h4>
            <ul class="space-y-2.5 text-sm text-gray-400">
              <li><a routerLink="/privacy" class="hover:text-white transition-colors text-brand font-medium">Privacy Policy (CWS)</a></li>
              <li><a routerLink="/terms" class="hover:text-white transition-colors">Terms of Service</a></li>
              <li>
                <div class="pt-2">
                  <span class="text-xs text-gray-500 block">Developer Support:</span>
                  <a href="mailto:rohan26ir@gmail.com" class="text-xs text-indigo-400 hover:text-indigo-300 font-mono mt-0.5 inline-block">rohan26ir&#64;gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Smart Dummy Data Filler (GhostInput). Built for developers and QA engineers.</p>
          <p class="flex items-center gap-1.5">
            <span>Built with modern Angular 21 & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;
  readonly Heart = Heart;
  readonly Github = Github;
  readonly Mail = Mail;
  readonly ExternalLink = ExternalLink;
}
