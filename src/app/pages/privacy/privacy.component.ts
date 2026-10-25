import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  LucideAngularModule, 
  ShieldCheck, 
  EyeOff, 
  ServerOff, 
  Database, 
  Mail, 
  ArrowLeft,
  Chrome
} from 'lucide-angular';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <div class="max-w-[1400px] mx-auto px-6 sm:px-10 py-12 sm:py-16 relative z-20 space-y-12">
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
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-14 relative overflow-hidden shadow-2xl space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-mono uppercase tracking-widest">
          <lucide-icon [img]="ShieldCheck" class="w-4 h-4 text-emerald-400"></lucide-icon>
          <span>Official Privacy Policy · Chrome Web Store Compliant</span>
        </div>
        <h1 class="font-podium text-4xl sm:text-6xl text-white uppercase tracking-tight">
          Privacy Policy
        </h1>
        <p class="text-white/40 text-xs font-mono">
          Effective Date: October 25, 2026 | Last Updated: October 25, 2026
        </p>
      </div>

      <!-- Quick Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-2 hover:border-white/40 transition-colors">
          <div class="text-emerald-400 mb-2"><lucide-icon [img]="ServerOff" class="w-6 h-6"></lucide-icon></div>
          <h3 class="text-white font-bold text-sm tracking-wide font-inter">Zero Remote Servers</h3>
          <p class="text-xs text-white/60 leading-relaxed font-inter">We run zero external telemetry, tracking, or backend logging servers.</p>
        </div>
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-2 hover:border-white/40 transition-colors">
          <div class="text-white mb-2"><lucide-icon [img]="EyeOff" class="w-6 h-6"></lucide-icon></div>
          <h3 class="text-white font-bold text-sm tracking-wide font-inter">Zero Data Collection</h3>
          <p class="text-xs text-white/60 leading-relaxed font-inter">No passwords, emails, form values, or browsing history are collected.</p>
        </div>
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 space-y-2 hover:border-white/40 transition-colors">
          <div class="text-white mb-2"><lucide-icon [img]="Database" class="w-6 h-6"></lucide-icon></div>
          <h3 class="text-white font-bold text-sm tracking-wide font-inter">100% Local Storage</h3>
          <p class="text-xs text-white/60 leading-relaxed font-inter">Your custom regex rules and presets never leave your personal browser.</p>
        </div>
      </div>

      <!-- Legal Policy Body -->
      <div class="space-y-10 text-white/80 text-sm leading-relaxed border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-14 shadow-2xl">
        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>1. Introduction</span>
          </h2>
          <p>
            This Privacy Policy governs the use of the <strong>GhostInput - Smart Dummy Data Filler</strong> browser extension (the "Extension"). GhostInput is a developer testing utility created to assist software engineers, QA professionals, and web developers in populating reactive web forms with mock dummy data.
          </p>
          <p>
            We take your privacy seriously. Our core engineering principle is <strong>Zero Data Transmission</strong>: the Extension does not collect, record, harvest, transmit, or monetize any user data.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>2. Information We Do NOT Collect</span>
          </h2>
          <p>The Extension strictly complies with the Google Chrome Web Store Developer Program Policies:</p>
          <ul class="list-disc pl-5 space-y-2 text-white/60">
            <li><strong>No Personally Identifiable Information (PII)</strong>: We do not collect names, phone numbers, home addresses, or emails.</li>
            <li><strong>No Authentication Credentials</strong>: We do not log or capture passwords, API keys, session cookies, or tokens.</li>
            <li><strong>No Financial or Credit Information</strong>: We do not collect real credit cards or bank details. All generated card numbers are synthetic test numbers following standard Luhn algorithms for QA purposes.</li>
            <li><strong>No Browsing History or Website Content</strong>: We do not track URLs visited, page views, mouse movements, or keystrokes.</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>3. How Permissions Are Used</span>
          </h2>
          <p>The Extension requests the minimum necessary permissions under the Chrome Web Store Least Privilege principle:</p>
          <div class="space-y-3 font-inter">
            <div class="p-4 bg-neutral-950 border border-white/10 space-y-1">
              <span class="font-mono text-xs text-white font-semibold">&lt;all_urls&gt; (Host Permission)</span>
              <p class="text-xs text-white/60 leading-relaxed">
                Allows the content script to detect and hydrate input fields when triggered via keyboard shortcuts (<code class="text-white font-mono bg-white/10 px-1 py-0.5 rounded">Alt+Shift+F</code>) or context menus across any website, staging environment, or <code class="text-white font-mono bg-white/10 px-1 py-0.5 rounded">localhost</code>. The content script operates passively and never reads or transmits existing webpage content.
              </p>
            </div>

            <div class="p-4 bg-neutral-950 border border-white/10 space-y-1">
              <span class="font-mono text-xs text-white font-semibold">storage</span>
              <p class="text-xs text-white/60 leading-relaxed">
                Used exclusively to store user-configured preferences, active personas, custom regex rules, and local hydration counters on your local device via <code class="text-white font-mono">chrome.storage.local</code> / <code class="text-white font-mono">chrome.storage.sync</code>.
              </p>
            </div>

            <div class="p-4 bg-neutral-950 border border-white/10 space-y-1">
              <span class="font-mono text-xs text-white font-semibold">contextMenus</span>
              <p class="text-xs text-white/60 leading-relaxed">
                Used to render right-click options ("Fill Entire Form", "Fill Focused Input Only") directly in the browser's context menu.
              </p>
            </div>
          </div>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>4. Chrome Web Store Limited Use Disclosure</span>
          </h2>
          <p>
            The Extension's use of information received from Google APIs adheres to the <strong>Chrome Web Store User Data Policy</strong>, including the Limited Use requirements:
          </p>
          <ul class="list-disc pl-5 space-y-1.5 text-white/60">
            <li>We do not transfer or sell user data to third parties.</li>
            <li>We do not use or transfer user data for serving advertisements.</li>
            <li>We do not use or transfer user data to determine creditworthiness or for lending purposes.</li>
          </ul>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>5. Third-Party Services &amp; Remote Code</span>
          </h2>
          <p>
            The Extension does not load any remotely hosted JavaScript code, external CDNs, or third-party tracking scripts. All data generation routines and UI components are fully self-contained within the installed extension bundle.
          </p>
        </section>

        <section class="space-y-3">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>6. Changes to This Policy</span>
          </h2>
          <p>
            If we update or modify this Privacy Policy, the revised version will be published here with an updated "Effective Date". Continued use of the Extension constitutes acceptance of any updates.
          </p>
        </section>

        <section class="space-y-4 pt-6 border-t border-white/10">
          <h2 class="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2 font-inter">
            <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
            <span>7. Developer Contact</span>
          </h2>
          <p class="text-white/70">
            If you have questions, inquiries, or feedback regarding this Privacy Policy, you may contact the developer directly:
          </p>
          <div class="p-4 bg-neutral-950 border border-white/10 inline-flex items-center gap-3">
            <lucide-icon [img]="Mail" class="w-5 h-5 text-white"></lucide-icon>
            <div>
              <div class="text-[10px] text-white/40 font-mono uppercase tracking-wider">Official Developer Support Email</div>
              <a href="mailto:rohan26ir@gmail.com" class="text-sm font-semibold text-white hover:underline font-mono">rohan26ir&#64;gmail.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  `
})
export class PrivacyComponent {
  readonly ShieldCheck = ShieldCheck;
  readonly EyeOff = EyeOff;
  readonly ServerOff = ServerOff;
  readonly Database = Database;
  readonly Mail = Mail;
  readonly ArrowLeft = ArrowLeft;
  readonly Chrome = Chrome;
}
