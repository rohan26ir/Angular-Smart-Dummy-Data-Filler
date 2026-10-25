import { Component } from '@angular/core';
import { LucideAngularModule, Cpu, ShieldCheck, Sparkles, Sliders, Lock } from 'lucide-angular';

@Component({
  selector: 'app-bento-features',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="features" class="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 relative z-20">
      <!-- Section Header -->
      <div id="architecture" class="text-center space-y-3 mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-white/50 px-3 py-1 border border-white/10 bg-white/5 inline-block">
          Engine Architecture
        </span>
        <h2 class="font-podium text-white text-3xl sm:text-5xl uppercase tracking-tight">
          Engineered for Complex Frameworks
        </h2>
        <p class="text-white/60 text-sm max-w-xl mx-auto font-inter">
          Standard autofillers fail on modern virtual DOMs and reactive state managers. GhostInput was engineered from the metal up.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Bento 1: Large Span (React Fiber Bypass) -->
        <div class="md:col-span-2 border border-white/15 bg-black/70 backdrop-blur-md p-8 sm:p-10 space-y-6 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Cpu" class="w-6 h-6"></lucide-icon>
          </div>
          <div class="space-y-2">
            <div class="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Deep DOM Interception
            </div>
            <h3 class="font-podium text-2xl sm:text-3xl uppercase tracking-wide text-white">
              React Prototype Tracker Bypass
            </h3>
            <p class="text-white/60 text-sm leading-relaxed font-inter">
              Modern frameworks intercept standard <code class="text-white bg-white/10 px-1.5 py-0.5 rounded font-mono">input.value = "..."</code> setter calls. GhostInput accesses <code class="text-white bg-white/10 px-1.5 py-0.5 rounded font-mono">Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')</code> directly, triggering genuine native input events, bubbling change dispatchers, and state re-renders.
            </p>
          </div>
          <div class="bg-neutral-950 p-4 border border-white/10 font-mono text-xs text-white/80 overflow-x-auto">
            <div class="text-white/30">// Bypasses React Fiber value tracker and triggers Zod / Formik validation</div>
            <div>const descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');</div>
            <div>descriptor?.set?.call(input, dummyValue);</div>
            <div class="text-emerald-400">input.dispatchEvent(new Event('input', &#123; bubbles: true &#125;));</div>
          </div>
        </div>

        <!-- Bento 2: Password Matching -->
        <div class="border border-white/15 bg-black/70 backdrop-blur-md p-8 sm:p-10 space-y-6 hover:border-white/40 transition-colors flex flex-col justify-between">
          <div class="space-y-6">
            <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <lucide-icon [img]="ShieldCheck" class="w-6 h-6"></lucide-icon>
            </div>
            <div class="space-y-2">
              <div class="text-[10px] font-mono uppercase tracking-widest text-white/40">
                Credentials Integrity
              </div>
              <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
                Password Pair Syncing
              </h3>
              <p class="text-white/60 text-sm leading-relaxed font-inter">
                Never fail a "Confirm Password" mismatch validation again. The session generator guarantees matching credentials across multiple password inputs on the same form.
              </p>
            </div>
          </div>
          <div class="p-3 bg-neutral-950 border border-white/10 flex items-center gap-2.5 text-xs text-white/80 font-mono">
            <lucide-icon [img]="Lock" class="w-3.5 h-3.5 text-emerald-400"></lucide-icon>
            <span>password === confirm_password</span>
          </div>
        </div>

        <!-- Bento 3: Context-Aware Heuristics -->
        <div class="border border-white/15 bg-black/70 backdrop-blur-md p-8 sm:p-10 space-y-6 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Sparkles" class="w-6 h-6"></lucide-icon>
          </div>
          <div class="space-y-2">
            <div class="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Heuristic Inspection
            </div>
            <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
              Context-Aware Regex
            </h3>
            <p class="text-white/60 text-sm leading-relaxed font-inter">
              Evaluates label text, placeholders, autocomplete tags, and ARIA attributes to accurately distinguish between First Name, Shipping Address, Zip, and Luhn-valid Credit Cards.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 text-[10px] font-mono text-white/50">
            <span class="px-2 py-1 bg-white/5 border border-white/10">aria-label</span>
            <span class="px-2 py-1 bg-white/5 border border-white/10">billing_*</span>
            <span class="px-2 py-1 bg-white/5 border border-white/10">placeholder</span>
            <span class="px-2 py-1 bg-white/5 border border-white/10">Luhn Algorithm</span>
          </div>
        </div>

        <!-- Bento 4: Custom Persona Schemas (Span 2) -->
        <div class="md:col-span-2 border border-white/15 bg-black/70 backdrop-blur-md p-8 sm:p-10 space-y-6 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Sliders" class="w-6 h-6"></lucide-icon>
          </div>
          <div class="space-y-2">
            <div class="text-[10px] font-mono uppercase tracking-widest text-white/40">
              Configurable Profiles
            </div>
            <h3 class="font-podium text-2xl sm:text-3xl uppercase tracking-wide text-white">
              Custom Schema &amp; Persona Manager
            </h3>
            <p class="text-white/60 text-sm leading-relaxed font-inter">
              Switch seamlessly between <strong>Default US</strong>, <strong>E-Commerce Buyer</strong>, and <strong>Enterprise B2B</strong> presets. Build custom regex overrides, define deterministic seeds, and export JSON profiles across your engineering team.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-inter">
            <div class="p-3 bg-neutral-950 border border-white/10 text-xs">
              <span class="text-white font-semibold block mb-1">Standard Dev</span>
              <span class="text-white/50">Clean ASCII test cases and quick form pass.</span>
            </div>
            <div class="p-3 bg-neutral-950 border border-white/10 text-xs">
              <span class="text-white font-semibold block mb-1">QA Edge Cases</span>
              <span class="text-white/50">Long boundary strings &amp; special unicode characters.</span>
            </div>
            <div class="p-3 bg-neutral-950 border border-white/10 text-xs">
              <span class="text-white font-semibold block mb-1">Enterprise B2B</span>
              <span class="text-white/50">Corporate domains, job roles, and VAT/EIN codes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class BentoFeaturesComponent {
  readonly Cpu = Cpu;
  readonly ShieldCheck = ShieldCheck;
  readonly Sparkles = Sparkles;
  readonly Sliders = Sliders;
  readonly Lock = Lock;
}
