import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, FileText, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <div class="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 sm:py-16 relative z-20 space-y-10">
      <!-- Breadcrumb / Back Link -->
      <div>
        <a
          routerLink="/"
          class="inline-flex items-center gap-2 text-xs font-inter uppercase tracking-widest text-white/50 hover:text-white transition-colors group"
        >
          <lucide-icon [img]="ArrowLeft" class="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform"></lucide-icon>
          <span>Back to Home</span>
        </a>
      </div>

      <!-- Header Card -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-14 relative overflow-hidden shadow-2xl space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-widest">
          <lucide-icon [img]="FileText" class="w-4 h-4 text-white"></lucide-icon>
          <span>Legal Agreement</span>
        </div>
        <h1 class="font-podium text-4xl sm:text-6xl text-white uppercase tracking-tight">
          Terms of Service
        </h1>
        <p class="text-white/40 text-xs font-mono">Effective: October 25, 2026 | Last Updated: October 25, 2026</p>
      </div>

      <!-- Content Card -->
      <div class="space-y-8 text-white/80 text-sm leading-relaxed border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-14 shadow-2xl">
        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>1. Acceptance of Terms</span>
          </h2>
          <p>
            By downloading, installing, or using GhostInput - Smart Dummy Data Filler (the "Extension"), you agree to be bound by these Terms of Service. If you do not agree with any portion of these terms, do not install or use the Extension.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>2. Permitted Developer &amp; QA Use</span>
          </h2>
          <p>
            The Extension is provided as an open developer tool designed strictly for testing, QA verification, and software development workflows. You agree not to use the Extension for automated spamming, unauthorized credential stuffing, or violating the terms of service of third-party websites.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>3. Disclaimer of Warranties</span>
          </h2>
          <p>
            The Extension is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied. The developers do not warrant that the dummy data generated will satisfy every third-party schema or that the software will be error-free.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>4. Limitation of Liability</span>
          </h2>
          <p>
            In no event shall the developers of GhostInput be held liable for any damages arising out of the use or inability to use this software on live production environments. Developers and QA engineers are encouraged to test and use the extension on test and staging domains.
          </p>
        </section>

        <div class="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>Questions about these Terms? Contact rohan26ir&#64;gmail.com</span>
          <a routerLink="/privacy" class="text-white hover:underline font-medium">Read Privacy Policy →</a>
        </div>
      </div>
    </div>
  `
})
export class TermsComponent {
  readonly FileText = FileText;
  readonly ArrowLeft = ArrowLeft;
}
