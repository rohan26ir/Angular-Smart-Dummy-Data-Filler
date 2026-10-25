import { Component } from '@angular/core';
import { LucideAngularModule, Check, X } from 'lucide-angular';

@Component({
  selector: 'app-comparison-table',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="comparison" class="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 relative z-20">
      <div class="text-center space-y-3 mb-16">
        <span class="text-xs font-mono uppercase tracking-widest text-white/50 px-3 py-1 border border-white/10 bg-white/5 inline-block">
          Competitive Analysis
        </span>
        <h2 class="font-podium text-white text-3xl sm:text-5xl uppercase tracking-tight">
          Why QA Engineers Switch to GhostInput
        </h2>
        <p class="text-white/60 text-sm max-w-xl mx-auto font-inter">
          See how GhostInput compares directly to native browser autofill and legacy dummy data tools.
        </p>
      </div>

      <div class="border border-white/15 bg-black/80 backdrop-blur-md overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm font-inter">
            <thead class="bg-neutral-950 border-b border-white/10 text-white/70 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th class="p-6">Capability</th>
                <th class="p-6 text-white/40">Browser Autofill</th>
                <th class="p-6 text-white/40">Legacy Fillers</th>
                <th class="p-6 text-white font-bold bg-white/5 border-l border-white/15">GhostInput</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10 text-white/80">
              <tr>
                <td class="p-6 font-medium text-white">React 18/19 &amp; Vue Event Dispatch</td>
                <td class="p-6 text-white/40">Fails (No re-render)</td>
                <td class="p-6 text-white/50">Partial / Unstable</td>
                <td class="p-6 text-white font-semibold bg-white/5 border-l border-white/15 flex items-center gap-2">
                  <lucide-icon [img]="Check" class="w-4 h-4 text-emerald-400"></lucide-icon>
                  <span>Native Prototype Setter</span>
                </td>
              </tr>
              <tr>
                <td class="p-6 font-medium text-white">Matching Password Pairs</td>
                <td class="p-6 text-white/40">No (Requires Manual)</td>
                <td class="p-6 text-white/40">Generates Random Mismatch</td>
                <td class="p-6 text-white font-semibold bg-white/5 border-l border-white/15">
                  <span class="flex items-center gap-2">
                    <lucide-icon [img]="Check" class="w-4 h-4 text-emerald-400"></lucide-icon>
                    <span>Guaranteed Shared String</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="p-6 font-medium text-white">Nested Shadow DOM &amp; Web Components</td>
                <td class="p-6 text-white/40">Ignored</td>
                <td class="p-6 text-white/40">Ignored</td>
                <td class="p-6 text-white font-semibold bg-white/5 border-l border-white/15">
                  <span class="flex items-center gap-2">
                    <lucide-icon [img]="Check" class="w-4 h-4 text-emerald-400"></lucide-icon>
                    <span>Recursive Shadow Traversal</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="p-6 font-medium text-white">Custom Personas &amp; Regex Overrides</td>
                <td class="p-6 text-white/40">None</td>
                <td class="p-6 text-white/50">Static Rules</td>
                <td class="p-6 text-white font-semibold bg-white/5 border-l border-white/15">
                  <span class="flex items-center gap-2">
                    <lucide-icon [img]="Check" class="w-4 h-4 text-emerald-400"></lucide-icon>
                    <span>Deterministic JSON Schemas</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="p-6 font-medium text-white">Privacy &amp; Analytics Telemetry</td>
                <td class="p-6 text-white/40">Syncs to Cloud Account</td>
                <td class="p-6 text-white/50">Third-Party Analytics</td>
                <td class="p-6 text-white font-semibold bg-white/5 border-l border-white/15">
                  <span class="flex items-center gap-2">
                    <lucide-icon [img]="Check" class="w-4 h-4 text-emerald-400"></lucide-icon>
                    <span>Zero Remote Code (100% Local)</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `
})
export class ComparisonTableComponent {
  readonly Check = Check;
  readonly X = X;
}
