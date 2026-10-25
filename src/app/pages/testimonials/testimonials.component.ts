import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  LucideAngularModule, 
  ArrowLeft, 
  Star, 
  Quote, 
  Award, 
  CheckCircle2, 
  Chrome, 
  ArrowUpRight 
} from 'lucide-angular';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  highlight: string;
}

@Component({
  selector: 'app-testimonials',
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
          <lucide-icon [img]="Award" class="w-4 h-4 text-emerald-400"></lucide-icon>
          <span>Real-World Engineering Feedback</span>
        </div>
        <h1 class="font-podium text-4xl sm:text-6xl text-white uppercase tracking-tight">
          What Engineers Are Saying
        </h1>
        <p class="text-white/60 text-sm sm:text-base max-w-2xl font-inter leading-relaxed">
          Discover why software engineering teams, QA automation professionals, and full-stack developers rely on GhostInput to automate their daily form testing pipelines.
        </p>
      </div>

      <!-- Metrics Bar -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 text-center">
          <div class="font-inter text-3xl sm:text-4xl font-bold text-white mb-1">45 min</div>
          <div class="text-xs text-white/50 uppercase tracking-widest font-inter">Avg Daily Time Saved</div>
        </div>
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 text-center">
          <div class="font-inter text-3xl sm:text-4xl font-bold text-white mb-1">99.8%</div>
          <div class="text-xs text-white/50 uppercase tracking-widest font-inter">Validation Pass Rate</div>
        </div>
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 text-center">
          <div class="font-inter text-3xl sm:text-4xl font-bold text-white mb-1">&lt; 50ms</div>
          <div class="text-xs text-white/50 uppercase tracking-widest font-inter">Hydration Latency</div>
        </div>
        <div class="border border-white/15 bg-black/80 backdrop-blur-md p-6 text-center">
          <div class="font-inter text-3xl sm:text-4xl font-bold text-emerald-400 mb-1">100%</div>
          <div class="text-xs text-white/50 uppercase tracking-widest font-inter">Client-Side Privacy</div>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (item of testimonials; track item.name) {
          <div class="border border-white/15 bg-black/80 backdrop-blur-md p-8 flex flex-col justify-between space-y-6 hover:border-white/40 transition-colors">
            <div class="space-y-4">
              <!-- Rating Stars -->
              <div class="flex items-center gap-1 text-white">
                @for (star of [1, 2, 3, 4, 5]; track star) {
                  <lucide-icon [img]="Star" class="w-4 h-4 fill-white text-white"></lucide-icon>
                }
              </div>

              <!-- Highlight Pill -->
              <div class="inline-block px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-white/80">
                {{ item.highlight }}
              </div>

              <!-- Quote -->
              <p class="text-sm text-white/80 font-inter leading-relaxed italic">
                "{{ item.quote }}"
              </p>
            </div>

            <!-- Author Info -->
            <div class="pt-4 border-t border-white/10">
              <div class="text-sm font-bold text-white font-inter">{{ item.name }}</div>
              <div class="text-xs text-white/50 font-inter">{{ item.role }}</div>
              <div class="text-[11px] text-white/40 font-mono mt-0.5">{{ item.company }}</div>
            </div>
          </div>
        }
      </div>

      <!-- Bottom Banner -->
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-10 text-center space-y-6 shadow-2xl">
        <h3 class="font-podium text-3xl sm:text-5xl uppercase tracking-tight text-white">
          Join Hundreds of High-Velocity QA Engineers
        </h3>
        <p class="text-white/60 text-sm max-w-lg mx-auto font-inter">
          Install GhostInput free from the Chrome Web Store and never manually type test credentials again.
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
export class TestimonialsComponent {
  readonly ArrowLeft = ArrowLeft;
  readonly Star = Star;
  readonly Quote = Quote;
  readonly Award = Award;
  readonly CheckCircle2 = CheckCircle2;
  readonly Chrome = Chrome;
  readonly ArrowUpRight = ArrowUpRight;

  readonly testimonials: Testimonial[] = [
    {
      name: 'Sarah Jenkins',
      role: 'Lead QA Automation Engineer',
      company: 'CloudScale Dynamics',
      highlight: 'React 19 State Binding',
      rating: 5,
      quote: 'GhostInput eliminated 45 minutes of manual data typing from my daily regression test cycle. The native prototype bypass actually triggers our Zod schemas and Formik stores every single time.'
    },
    {
      name: 'David Chen',
      role: 'Senior Full Stack Developer',
      company: 'FinTech Solutions',
      highlight: 'Password Pair Syncing',
      rating: 5,
      quote: 'Confirm password sync alone makes this extension worth its weight in gold. No more random mismatched strings breaking validation during multi-step registration forms.'
    },
    {
      name: 'Maya Patel',
      role: 'Product Quality Specialist',
      company: 'NexaCommerce Global',
      highlight: 'E-Commerce Personas',
      rating: 5,
      quote: 'The e-commerce persona generates Luhn-valid test cards and proper US shipping addresses in milliseconds. We rolled this extension out to our entire frontend testing team.'
    },
    {
      name: 'Alex Rivera',
      role: 'DevOps & SDET Lead',
      company: 'VeloceLabs Technologies',
      highlight: 'Zero Telemetry & Compliance',
      rating: 5,
      quote: 'Zero telemetry and 100% local memory execution allowed our strict enterprise security compliance team to approve it immediately without friction.'
    },
    {
      name: 'Liam Thorne',
      role: 'Principal Frontend Architect',
      company: 'DataCore Systems',
      highlight: 'Shadow DOM Forms',
      rating: 5,
      quote: 'We use complex nested web components and shadow DOM roots across our design system. GhostInput is the only tool that recursively traversals and fills our forms without errors.'
    },
    {
      name: 'Emma Watson',
      role: 'Software Engineer in Test',
      company: 'Streamline Mobile & Web',
      highlight: 'Sub-50ms Hotkey',
      rating: 5,
      quote: 'Alt+Shift+F is baked into my muscle memory now. It makes interactive staging QA feel like flying. Highly recommend to any web engineering team.'
    }
  ];
}
