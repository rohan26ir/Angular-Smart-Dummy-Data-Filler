import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  LucideAngularModule, 
  ArrowLeft, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Sliders, 
  Lock, 
  Zap, 
  Layers, 
  EyeOff, 
  Keyboard, 
  MousePointerClick,
  CheckCircle2,
  ArrowUpRight,
  Chrome
} from 'lucide-angular';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <div class="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 sm:py-16 relative z-20 space-y-12">
      <!-- Breadcrumb -->
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
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-14 relative overflow-hidden shadow-2xl space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-widest">
          <lucide-icon [img]="Zap" class="w-4 h-4 text-emerald-400"></lucide-icon>
          <span>Comprehensive Technical Capabilities</span>
        </div>
        <h1 class="font-podium text-4xl sm:text-6xl text-white uppercase tracking-tight">
          Engineered for Modern Web Stacks
        </h1>
        <p class="text-white/60 text-sm sm:text-base max-w-2xl font-inter leading-relaxed">
          Standard autofillers choke on React synthetic events and shadow DOM boundaries. GhostInput delivers sub-50ms native DOM hydration with 100% local client-side privacy.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Feature 1: React Prototype Bypass -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Cpu" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Prototype Tracker Bypass
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Directly calls the native <code class="text-white font-mono bg-white/10 px-1 py-0.5 rounded">HTMLInputElement.prototype</code> descriptor setter to trigger genuine input and change event bubbling across React 18/19, Formik, and Zod.
          </p>
        </div>

        <!-- Feature 2: Password Pair Syncing -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Lock" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Synchronized Password Pairs
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Eliminates "Confirm Password" mismatch validation errors forever. Generates identical, highly secure synthetic credentials across all password inputs on the same form.
          </p>
        </div>

        <!-- Feature 3: Context-Aware Regex -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Sparkles" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Context-Aware Heuristics
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Parses label text, placeholders, autocomplete tags, and ARIA attributes to accurately distinguish between First Name, Shipping Address, Zip, and Luhn-valid Credit Cards.
          </p>
        </div>

        <!-- Feature 4: Shadow DOM & Web Components -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Layers" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Recursive Shadow Traversal
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Recursively inspects open Shadow Roots and custom Web Components, guaranteeing every nested form field is hydrated without manual script intervention.
          </p>
        </div>

        <!-- Feature 5: Persona Presets -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Sliders" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Custom Schema Personas
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Toggle between Default US, E-Commerce Buyer, and Enterprise B2B profiles. Build custom regex overrides and export JSON presets across your QA engineering team.
          </p>
        </div>

        <!-- Feature 6: Zero Telemetry Privacy -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="EyeOff" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            100% Local Client Privacy
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Zero external servers, zero CDNs, zero telemetry, and zero data collection. All fake dummy data is generated dynamically inside local memory.
          </p>
        </div>

        <!-- Feature 7: Hotkey Velocity -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Keyboard" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Sub-50ms Hotkey Trigger
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Press <code class="text-white font-mono bg-white/10 px-1 py-0.5 rounded">Alt + Shift + F</code> (or <code class="text-white font-mono bg-white/10 px-1 py-0.5 rounded">Option + Shift + F</code> on macOS) to instantly populate any active form in under 50ms.
          </p>
        </div>

        <!-- Feature 8: Context Menu Actions -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="MousePointerClick" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Right-Click Precision
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Access context menu options to "Fill Entire Form" or "Fill Focused Input Only" without ever taking your hands off the mouse during visual QA inspections.
          </p>
        </div>

        <!-- Feature 9: Multi-Environment Ready -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="ShieldCheck" class="w-6 h-6"></lucide-icon>
          </div>
          <h3 class="font-podium text-2xl uppercase tracking-wide text-white">
            Localhost &amp; Staging Ready
          </h3>
          <p class="text-xs sm:text-sm text-white/60 font-inter leading-relaxed">
            Works out of the box on <code class="text-white font-mono bg-white/10 px-1 py-0.5 rounded">localhost</code>, staging domains, and internal test suites with zero configuration or port whitelisting.
          </p>
        </div>
      </div>

      <!-- Bottom Banner -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-10 text-center space-y-6 shadow-2xl">
        <h3 class="font-podium text-3xl sm:text-5xl uppercase tracking-tight text-white">
          Ready to Experience Lightning Autofill?
        </h3>
        <p class="text-white/60 text-sm max-w-lg mx-auto font-inter">
          Install the free Manifest V3 extension today and start testing forms at 10x velocity.
        </p>
        <div class="flex justify-center">
          <a
            href="https://chromewebstore.google.com"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-black px-8 py-4 text-xs font-inter font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 shadow-xl"
          >
            <lucide-icon [img]="Chrome" class="w-4 h-4"></lucide-icon>
            <span>ADD TO CHROME - FREE</span>
            <lucide-icon [img]="ArrowUpRight" class="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></lucide-icon>
          </a>
        </div>
      </div>
    </div>
  `
})
export class FeaturesComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly Cpu = Cpu;
  readonly ShieldCheck = ShieldCheck;
  readonly Sparkles = Sparkles;
  readonly Sliders = Sliders;
  readonly Lock = Lock;
  readonly Zap = Zap;
  readonly Layers = Layers;
  readonly EyeOff = EyeOff;
  readonly Keyboard = Keyboard;
  readonly MousePointerClick = MousePointerClick;
  readonly CheckCircle2 = CheckCircle2;
  readonly ArrowUpRight = ArrowUpRight;
  readonly Chrome = Chrome;
}
