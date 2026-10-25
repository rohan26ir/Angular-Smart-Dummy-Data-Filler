import { Component, signal } from '@angular/core';
import { LucideAngularModule, ChevronDown, ChevronUp } from 'lucide-angular';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="faq" class="max-w-[1000px] mx-auto px-6 sm:px-10 py-24 relative z-20">
      <div class="text-center space-y-3 mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-white/50 px-3 py-1 border border-white/10 bg-white/5 inline-block">
          Frequently Asked Questions
        </span>
        <h2 class="font-podium text-white text-3xl sm:text-5xl uppercase tracking-tight">
          Everything You Need to Know
        </h2>
        <p class="text-white/60 text-sm max-w-md mx-auto font-inter">
          Details on shortcuts, privacy architecture, and supported browser environments.
        </p>
      </div>

      <div class="space-y-4">
        @for (item of faqs; track item.q; let idx = $index) {
          <div class="border border-white/15 bg-black/80 backdrop-blur-md transition-all overflow-hidden">
            <button
              (click)="toggleFaq(idx)"
              class="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.03] transition-colors"
            >
              <span class="text-base font-semibold text-white font-inter tracking-wide">{{ item.q }}</span>
              <lucide-icon
                [img]="openFaq() === idx ? ChevronUp : ChevronDown"
                class="w-5 h-5 text-white/60 flex-shrink-0 transition-transform"
              ></lucide-icon>
            </button>
            @if (openFaq() === idx) {
              <div class="px-6 pb-6 text-sm text-white/60 leading-relaxed font-inter border-t border-white/10 pt-4 animate-fadeIn">
                {{ item.a }}
              </div>
            }
          </div>
        }
      </div>
    </section>
  `
})
export class FaqAccordionComponent {
  readonly ChevronDown = ChevronDown;
  readonly ChevronUp = ChevronUp;

  openFaq = signal<number | null>(0);

  readonly faqs = [
    {
      q: 'Does GhostInput read or log my real passwords?',
      a: 'No. GhostInput generates synthetic random dummy values locally in memory. It never reads, records, or logs your existing passwords, keystrokes, personal credentials, or session cookies.'
    },
    {
      q: 'What keyboard shortcuts are supported?',
      a: 'Press Alt + Shift + F on Windows and Linux, or Option + Shift + F on macOS, to immediately populate any active web form in under 50ms without touching the mouse.'
    },
    {
      q: 'Why does the extension require access to all websites?',
      a: 'To allow developers and QA engineers to trigger the autofill shortcut instantly on any local environment (localhost, staging servers, web portals) without needing to configure domain whitelists manually. It operates completely passively and never sends any network telemetry.'
    },
    {
      q: 'How does it bypass React 18/19 state management issues?',
      a: 'Modern frameworks wrap HTMLInputElement to track synthetic changes. GhostInput calls the underlying native property descriptor setter (HTMLInputElement.prototype.value) and triggers simulated native input and change events with bubble flags enabled, ensuring React, Vue, Svelte, and Angular signals react immediately.'
    }
  ];

  toggleFaq(index: number) {
    if (this.openFaq() === index) {
      this.openFaq.set(null);
    } else {
      this.openFaq.set(index);
    }
  }
}
