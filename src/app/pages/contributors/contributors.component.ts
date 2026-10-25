import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  LucideAngularModule, 
  ArrowLeft, 
  Users, 
  GitPullRequest, 
  Code, 
  Github, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-angular';

@Component({
  selector: 'app-contributors',
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
          <lucide-icon [img]="Users" class="w-4 h-4 text-emerald-400"></lucide-icon>
          <span>Open Source Community</span>
        </div>
        <h1 class="font-podium text-4xl sm:text-6xl text-white uppercase tracking-tight">
          Contributors &amp; Community
        </h1>
        <p class="text-white/60 text-sm sm:text-base max-w-2xl font-inter leading-relaxed">
          GhostInput thrives because of the developers, QA testers, and open-source contributors who build, audit, and expand its regex heuristic engines and persona schemas.
        </p>
      </div>

      <!-- Lead Maintainer Card -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center font-podium text-2xl text-white">
            R
          </div>
          <div>
            <h2 class="font-podium text-2xl uppercase tracking-wider text-white">Rohan</h2>
            <div class="text-xs text-emerald-400 font-mono">Creator &amp; Lead Architect · rohan26ir&#64;gmail.com</div>
          </div>
        </div>
        <p class="text-sm text-white/70 font-inter leading-relaxed max-w-3xl">
          Architected the Manifest V3 content script dispatcher, native property descriptor setter bypass, and multi-persona heuristic evaluator. Active maintainer overseeing Chrome Web Store compliance, bug triage, and community pull requests.
        </p>
      </div>

      <!-- Contribution Areas Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Code" class="w-5 h-5"></lucide-icon>
          </div>
          <h3 class="font-podium text-xl uppercase tracking-wide text-white">
            Core Engine &amp; Heuristics
          </h3>
          <p class="text-xs text-white/60 font-inter leading-relaxed">
            Expanding regex patterns to recognize new input types (IBAN, VAT numbers, localization schemas, medical MRN identifiers).
          </p>
        </div>

        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="GitPullRequest" class="w-5 h-5"></lucide-icon>
          </div>
          <h3 class="font-podium text-xl uppercase tracking-wide text-white">
            Framework Compatibility
          </h3>
          <p class="text-xs text-white/60 font-inter leading-relaxed">
            Testing and reporting edge cases against upcoming versions of React Fiber, Angular signals, Svelte 5 runes, and Web Components.
          </p>
        </div>

        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-4 hover:border-white/40 transition-colors">
          <div class="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-white">
            <lucide-icon [img]="Sparkles" class="w-5 h-5"></lucide-icon>
          </div>
          <h3 class="font-podium text-xl uppercase tracking-wide text-white">
            International Personas
          </h3>
          <p class="text-xs text-white/60 font-inter leading-relaxed">
            Curating localized address, phone, and postal schemas for Europe, Japan, Latin America, and Asia-Pacific regional test suites.
          </p>
        </div>
      </div>

      <!-- How to Contribute Step Box -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-12 space-y-6">
        <h2 class="font-podium text-3xl uppercase tracking-tight text-white">
          How You Can Contribute
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-inter">
          <div class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 text-white">1</div>
            <div>
              <strong class="text-white block mb-1">Report Bugs &amp; Edge Cases</strong>
              <span class="text-white/60 text-xs leading-relaxed">Found a complex form that fails validation? Share the DOM structure or website URL so we can craft an automated test case.</span>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 text-white">2</div>
            <div>
              <strong class="text-white block mb-1">Submit Custom Personas</strong>
              <span class="text-white/60 text-xs leading-relaxed">Export your custom JSON personas and share presets with specific postal codes, tax IDs, and validation boundaries.</span>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 text-white">3</div>
            <div>
              <strong class="text-white block mb-1">Improve Documentation</strong>
              <span class="text-white/60 text-xs leading-relaxed">Write guides, create shortcut cheat sheets, and help expand our integration recipes for Cypress, Playwright, and Selenium.</span>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <div class="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 text-white">4</div>
            <div>
              <strong class="text-white block mb-1">Direct Developer Contact</strong>
              <span class="text-white/60 text-xs leading-relaxed">Reach out directly to <a href="mailto:rohan26ir@gmail.com" class="text-white underline font-mono">rohan26ir&#64;gmail.com</a> for architectural discussions and partnership inquiries.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ContributorsComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly Users = Users;
  readonly GitPullRequest = GitPullRequest;
  readonly Code = Code;
  readonly Github = Github;
  readonly Heart = Heart;
  readonly Sparkles = Sparkles;
  readonly CheckCircle2 = CheckCircle2;
  readonly ArrowUpRight = ArrowUpRight;
}
