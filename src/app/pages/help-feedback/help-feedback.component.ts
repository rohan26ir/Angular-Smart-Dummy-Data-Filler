import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  LucideAngularModule, 
  ArrowLeft, 
  HelpCircle, 
  Keyboard, 
  Send, 
  CheckCircle2, 
  Mail, 
  MessageSquare,
  AlertCircle
} from 'lucide-angular';

@Component({
  selector: 'app-help-feedback',
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
          <lucide-icon [img]="HelpCircle" class="w-4 h-4 text-emerald-400"></lucide-icon>
          <span>Developer Support &amp; Feedback</span>
        </div>
        <h1 class="font-podium text-4xl sm:text-6xl text-white uppercase tracking-tight">
          Help &amp; Feedback
        </h1>
        <p class="text-white/60 text-sm sm:text-base max-w-2xl font-inter leading-relaxed">
          Need assistance debugging a form, want to report a framework edge case, or suggest a new feature? We are here to help.
        </p>
      </div>

      <!-- Shortcut Cheat Sheet -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-3">
          <lucide-icon [img]="Keyboard" class="w-6 h-6 text-white"></lucide-icon>
          <h2 class="font-podium text-2xl uppercase tracking-wider text-white">Shortcut Quick Reference</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm font-inter">
            <thead class="bg-neutral-950 border-b border-white/10 text-white/60 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th class="p-4">Action</th>
                <th class="p-4">Windows / Linux</th>
                <th class="p-4">macOS</th>
                <th class="p-4">Alternative Method</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/10 text-white/80">
              <tr>
                <td class="p-4 font-semibold text-white">Autofill Entire Form</td>
                <td class="p-4 font-mono text-xs text-emerald-400">Alt + Shift + F</td>
                <td class="p-4 font-mono text-xs text-emerald-400">Option + Shift + F</td>
                <td class="p-4 text-xs text-white/60">Right-click &gt; GhostInput &gt; Fill Entire Form</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-white">Fill Focused Field Only</td>
                <td class="p-4 font-mono text-xs text-white/60">Context Menu</td>
                <td class="p-4 font-mono text-xs text-white/60">Context Menu</td>
                <td class="p-4 text-xs text-white/60">Right-click input &gt; Fill Focused Input</td>
              </tr>
              <tr>
                <td class="p-4 font-semibold text-white">Custom Shortcuts Setup</td>
                <td class="p-4 font-mono text-xs text-white/60" colspan="3">
                  Visit <code class="text-white bg-white/10 px-1.5 py-0.5 rounded">chrome://extensions/shortcuts</code> to bind custom hotkeys
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Two-Column Layout: Troubleshooting & Feedback Form -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Troubleshooting Accordion -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 sm:p-10 space-y-6">
          <h2 class="font-podium text-2xl uppercase tracking-wider text-white">Common Troubleshooting</h2>
          <div class="space-y-4 font-inter text-sm">
            <div class="border border-white/10 p-5 bg-neutral-950 space-y-2">
              <strong class="text-white block font-semibold">1. Shortcut not responding on a webpage?</strong>
              <p class="text-white/60 text-xs leading-relaxed">
                Ensure the webpage has finished loading, or click anywhere inside the document body to focus the active tab. Certain internal Chrome URLs (<code class="text-white">chrome://</code>, Web Store) disable extension content scripts for security.
              </p>
            </div>

            <div class="border border-white/10 p-5 bg-neutral-950 space-y-2">
              <strong class="text-white block font-semibold">2. Form validation button remains disabled?</strong>
              <p class="text-white/60 text-xs leading-relaxed">
                Some third-party validation libraries require a <code class="text-white">blur</code> event to mark fields as touched. GhostInput automatically triggers change and input events with bubble flags; if needed, press Tab once through the fields.
              </p>
            </div>

            <div class="border border-white/10 p-5 bg-neutral-950 space-y-2">
              <strong class="text-white block font-semibold">3. Working on custom localhost ports?</strong>
              <p class="text-white/60 text-xs leading-relaxed">
                GhostInput operates without port restrictions. It supports standard <code class="text-white">http://localhost:3000</code>, <code class="text-white">:4200</code>, <code class="text-white">:5173</code>, and local IP addresses passively.
              </p>
            </div>
          </div>
        </div>

        <!-- Interactive Feedback Form -->
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 sm:p-10 space-y-6">
          <div class="space-y-2">
            <h2 class="font-podium text-2xl uppercase tracking-wider text-white">Send Us Feedback</h2>
            <p class="text-xs text-white/60 font-inter">
              Submit bug reports, request new personas, or tell us how we can improve.
            </p>
          </div>

          @if (submitted()) {
            <div class="p-6 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 space-y-2 animate-fadeIn font-inter">
              <div class="flex items-center gap-2 font-bold text-sm">
                <lucide-icon [img]="CheckCircle2" class="w-5 h-5"></lucide-icon>
                <span>Thank you for your feedback!</span>
              </div>
              <p class="text-xs text-white/80">
                Your message has been received. If you provided an email, our team will get back to you shortly.
              </p>
              <button
                (click)="submitted.set(false)"
                class="mt-3 text-xs text-white underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          } @else {
            <form (submit)="onSubmit($event)" class="space-y-4 font-inter">
              <div>
                <label class="block text-xs uppercase tracking-wider text-white/60 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-white/60 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-mono text-xs"
                />
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-white/60 mb-1">Category</label>
                <select
                  class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors"
                >
                  <option>Bug Report / Form Incompatibility</option>
                  <option>New Persona Schema Request</option>
                  <option>Feature Request</option>
                  <option>General Feedback</option>
                </select>
              </div>

              <div>
                <label class="block text-xs uppercase tracking-wider text-white/60 mb-1">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Describe your issue or suggestion in detail..."
                  class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full py-4 bg-white hover:bg-neutral-200 text-black font-inter font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-lg"
              >
                <lucide-icon [img]="Send" class="w-4 h-4"></lucide-icon>
                <span>Submit Feedback</span>
              </button>
            </form>
          }

          <!-- Direct Developer Email Strip -->
          <div class="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-white/60 font-inter">
            <lucide-icon [img]="Mail" class="w-4 h-4 text-white/80"></lucide-icon>
            <span>Or email directly: <a href="mailto:rohan26ir@gmail.com" class="text-white underline font-mono">rohan26ir&#64;gmail.com</a></span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HelpFeedbackComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly HelpCircle = HelpCircle;
  readonly Keyboard = Keyboard;
  readonly Send = Send;
  readonly CheckCircle2 = CheckCircle2;
  readonly Mail = Mail;
  readonly MessageSquare = MessageSquare;
  readonly AlertCircle = AlertCircle;

  submitted = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted.set(true);
  }
}
