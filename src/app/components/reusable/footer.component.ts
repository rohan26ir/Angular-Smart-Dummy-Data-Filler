import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Zap, ShieldCheck, ExternalLink, Mail, Chrome } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <footer class="w-full border-t border-white/10 bg-black/90 backdrop-blur-md pt-16 pb-12 mt-32 relative z-20">
      <div class="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          <!-- Column 1 & 2: Brand Information -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                <lucide-icon [img]="Zap" class="w-4 h-4 text-white"></lucide-icon>
              </div>
              <span class="font-podium text-white font-bold uppercase text-2xl tracking-wider">
                GHOSTINPUT
              </span>
            </div>
            <p class="text-sm text-white/60 max-w-sm leading-relaxed font-inter">
              Production-grade reactive form hydrator for QA automation engineers and full-stack developers. Fill 200+ inputs in under 50ms with 100% local client-side execution.
            </p>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono font-medium">
              <lucide-icon [img]="ShieldCheck" class="w-3.5 h-3.5 text-emerald-400"></lucide-icon>
              <span>Zero telemetry · 100% Client-side Privacy</span>
            </div>
          </div>

          <!-- Column 3: Product & Engine -->
          <div>
            <h4 class="text-xs font-semibold text-white uppercase tracking-widest mb-4 font-inter">Product</h4>
            <ul class="space-y-2.5 text-xs tracking-wider uppercase font-inter text-white/60">
              <li><a routerLink="/features" class="hover:text-white transition-colors">Features</a></li>
              <li><a href="/#demo" class="hover:text-white transition-colors">Live Interactive Demo</a></li>
              <li><a href="/#architecture" class="hover:text-white transition-colors">Engine Architecture</a></li>
              <li><a href="/#comparison" class="hover:text-white transition-colors">Framework Comparison</a></li>
              <li><a href="/#faq" class="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <!-- Column 4: Community & Company -->
          <div>
            <h4 class="text-xs font-semibold text-white uppercase tracking-widest mb-4 font-inter">Company</h4>
            <ul class="space-y-2.5 text-xs tracking-wider uppercase font-inter text-white/60">
              <li><a routerLink="/about" class="hover:text-white transition-colors">About GhostInput</a></li>
              <li><a routerLink="/testimonials" class="hover:text-white transition-colors">Testimonials</a></li>
              <li><a routerLink="/contributors" class="hover:text-white transition-colors">Contributors</a></li>
              <li><a routerLink="/help-feedback" class="hover:text-white transition-colors">Help &amp; Feedback</a></li>
            </ul>
          </div>

          <!-- Column 5: Compliance & Store -->
          <div>
            <h4 class="text-xs font-semibold text-white uppercase tracking-widest mb-4 font-inter">Legal &amp; Store</h4>
            <ul class="space-y-2.5 text-xs tracking-wider uppercase font-inter text-white/60">
              <li><a routerLink="/privacy" class="hover:text-white transition-colors text-white font-medium">Privacy Policy (CWS)</a></li>
              <li><a routerLink="/terms" class="hover:text-white transition-colors">Terms of Service</a></li>
              <li>
                <a href="https://chromewebstore.google.com" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors flex items-center gap-1.5 pt-1 text-white/80">
                  <lucide-icon [img]="Chrome" class="w-3.5 h-3.5"></lucide-icon>
                  <span>Chrome Web Store</span>
                  <lucide-icon [img]="ExternalLink" class="w-3 h-3 text-white/40"></lucide-icon>
                </a>
              </li>
              <li>
                <div class="pt-2 border-t border-white/5">
                  <span class="text-[10px] text-white/40 block font-mono">Developer Contact:</span>
                  <a href="mailto:rohan26ir@gmail.com" class="text-xs text-white/80 hover:text-white font-mono mt-0.5 inline-block">rohan26ir&#64;gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-inter">
          <p>© 2026 GhostInput · Smart Dummy Data Filler. Built for developers and QA engineers.</p>
          <p class="tracking-widest uppercase text-[10px]">
            Engineered with Precision &amp; Speed
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;
  readonly ExternalLink = ExternalLink;
  readonly Chrome = Chrome;
  readonly Mail = Mail;
}
