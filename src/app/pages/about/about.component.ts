import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  LucideAngularModule, 
  ArrowLeft, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  Terminal, 
  ArrowUpRight,
  Heart
} from 'lucide-angular';

@Component({
  selector: 'app-about',
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
          <span>Mission &amp; Engineering Philosophy</span>
        </div>
        <h1 class="font-podium text-4xl sm:text-6xl text-white uppercase tracking-tight">
          About GhostInput
        </h1>
        <p class="text-white/60 text-sm sm:text-base max-w-2xl font-inter leading-relaxed">
          GhostInput was born out of developer frustration with brittle autofillers, broken React event bindings, and invasive third-party telemetry. We set out to build the fastest, most reliable local-first form hydration tool on the planet.
        </p>
      </div>

      <!-- The Story Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 sm:p-10 space-y-4">
          <span class="text-xs font-mono uppercase tracking-widest text-white/40">The Problem</span>
          <h2 class="font-podium text-3xl uppercase tracking-wide text-white">Why Standard Autofillers Fail</h2>
          <p class="text-white/70 text-sm font-inter leading-relaxed">
            Every web developer and QA engineer has experienced it: you trigger a browser autofill or browser extension, but the form's "Submit" button remains disabled. Why? Because modern frontend frameworks (React, Vue, Angular, Svelte) intercept standard DOM setter calls.
          </p>
          <p class="text-white/70 text-sm font-inter leading-relaxed">
            Standard extensions merely set <code class="text-white font-mono bg-white/10 px-1 py-0.5 rounded">element.value = "..."</code>. React Fiber's internal value tracker ignores this mutation, preventing Zod, Formik, and component state from updating.
          </p>
        </div>

        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 sm:p-10 space-y-4">
          <span class="text-xs font-mono uppercase tracking-widest text-emerald-400">The Solution</span>
          <h2 class="font-podium text-3xl uppercase tracking-wide text-white">Native Prototype Event Dispatch</h2>
          <p class="text-white/70 text-sm font-inter leading-relaxed">
            GhostInput was engineered specifically to solve this fundamental architecture problem. By directly invoking the underlying native prototype property descriptor, GhostInput bypasses framework interception layers cleanly and triggers genuine native input events with bubbling flags enabled.
          </p>
          <p class="text-white/70 text-sm font-inter leading-relaxed">
            The result? 100% of inputs, custom select boxes, and shadow DOM nodes hydrate and trigger instant state re-renders in under 50 milliseconds.
          </p>
        </div>
      </div>

      <!-- Core Principles Grid -->
      <div class="space-y-6">
        <h2 class="font-podium text-3xl sm:text-4xl uppercase tracking-tight text-white text-center">
          Our Four Core Pillars
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 space-y-3">
            <div class="text-emerald-400"><lucide-icon [img]="Zap" class="w-6 h-6"></lucide-icon></div>
            <h3 class="font-inter font-bold text-white text-base">Sub-50ms Velocity</h3>
            <p class="text-xs text-white/60 leading-relaxed font-inter">
              Zero bloat. Instant keyboard shortcuts trigger simultaneous multi-field hydration without lagging your browser tab.
            </p>
          </div>

          <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 space-y-3">
            <div class="text-white"><lucide-icon [img]="ShieldCheck" class="w-6 h-6"></lucide-icon></div>
            <h3 class="font-inter font-bold text-white text-base">Zero Telemetry</h3>
            <p class="text-xs text-white/60 leading-relaxed font-inter">
              100% client-side execution. No remote backend servers, no analytics beacons, and zero personal data capture.
            </p>
          </div>

          <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 space-y-3">
            <div class="text-white"><lucide-icon [img]="Cpu" class="w-6 h-6"></lucide-icon></div>
            <h3 class="font-inter font-bold text-white text-base">Framework Agnostic</h3>
            <p class="text-xs text-white/60 leading-relaxed font-inter">
              Seamless compatibility across React 19, Angular, Vue 3, Svelte 5, Web Components, and Vanilla HTML forms.
            </p>
          </div>

          <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 space-y-3">
            <div class="text-white"><lucide-icon [img]="Code2" class="w-6 h-6"></lucide-icon></div>
            <h3 class="font-inter font-bold text-white text-base">Developer First</h3>
            <p class="text-xs text-white/60 leading-relaxed font-inter">
              Built by developers for developers. Configurable schemas, deterministic test seeds, and full JSON profile export.
            </p>
          </div>
        </div>
      </div>

      <!-- Tech Stack Badges -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-10 space-y-6">
        <h3 class="font-podium text-2xl uppercase tracking-wider text-white">Built With Modern Standards</h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-white/70">
          <div class="p-3 bg-neutral-950 border border-white/10 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Manifest V3 (Latest CWS)</span>
          </div>
          <div class="p-3 bg-neutral-950 border border-white/10 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>TypeScript 5.x</span>
          </div>
          <div class="p-3 bg-neutral-950 border border-white/10 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-400"></span>
            <span>Angular 21 Standalone</span>
          </div>
          <div class="p-3 bg-neutral-950 border border-white/10 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;
  readonly Cpu = Cpu;
  readonly Code2 = Code2;
  readonly CheckCircle2 = CheckCircle2;
  readonly Terminal = Terminal;
  readonly ArrowUpRight = ArrowUpRight;
  readonly Heart = Heart;
}
