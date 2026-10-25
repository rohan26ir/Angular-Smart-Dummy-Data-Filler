import { Component, signal } from '@angular/core';
import { LucideAngularModule, Zap, Trash2, CheckCircle2, Lock } from 'lucide-angular';

interface Persona {
  id: string;
  name: string;
  data: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    company: string;
    role: string;
    country: string;
    password: string;
    confirmPassword: string;
    bio: string;
  };
}

@Component({
  selector: 'app-interactive-demo',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="demo" class="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 relative z-20">
      <div class="border border-white/15 bg-black/80 backdrop-blur-xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
        <!-- Section Header -->
        <div class="text-center space-y-3 mb-10">
          <div class="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-white/60 px-3 py-1 border border-white/10 bg-white/5">
            <span class="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            <span>Live Interactive Form · Native Setter Dispatch</span>
          </div>
          <h2 class="font-podium text-white text-3xl sm:text-5xl uppercase tracking-tight">
            Test The Hydration In Real-Time
          </h2>
          <p class="text-white/60 text-sm max-w-lg mx-auto font-inter">
            Experience how GhostInput populates complex web forms with zero synthetic tracker rejection.
          </p>
        </div>

        <!-- Persona Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <span class="text-xs text-white/50 font-inter uppercase tracking-widest mr-2">Persona:</span>
          @for (p of personas; track p.id) {
            <button
              (click)="selectPersona(p.id)"
              class="px-4 py-2 text-xs font-inter uppercase tracking-widest transition-all border cursor-pointer"
              [class]="activePersona() === p.id
                ? 'bg-white text-black border-white font-bold'
                : 'bg-black/60 text-white/70 border-white/20 hover:border-white/50 hover:text-white'"
            >
              {{ p.name }}
            </button>
          }
        </div>

        <!-- Form Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto p-6 sm:p-8 bg-neutral-950/70 border border-white/10">
          <div>
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Full Name</span>
              <span class="text-[10px] text-white/30 font-mono">name="fullname"</span>
            </label>
            <input
              type="text"
              [value]="formData().fullName"
              placeholder="e.g. Jordan Miller"
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-inter"
            />
          </div>

          <div>
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Business Email</span>
              <span class="text-[10px] text-white/30 font-mono">type="email"</span>
            </label>
            <input
              type="email"
              [value]="formData().email"
              placeholder="e.g. jordan@techcorp.io"
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-mono text-xs"
            />
          </div>

          <div>
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Phone Number</span>
              <span class="text-[10px] text-white/30 font-mono">type="tel"</span>
            </label>
            <input
              type="tel"
              [value]="formData().phone"
              placeholder="+1 (555) 000-0000"
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-mono text-xs"
            />
          </div>

          <div>
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Company</span>
              <span class="text-[10px] text-white/30 font-mono">name="company"</span>
            </label>
            <input
              type="text"
              [value]="formData().company"
              placeholder="Apex Systems Inc."
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-inter"
            />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Shipping Address</span>
              <span class="text-[10px] text-white/30 font-mono">autocomplete="street-address"</span>
            </label>
            <input
              type="text"
              [value]="formData().address"
              placeholder="742 Evergreen Terrace, Springfield, IL"
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-inter"
            />
          </div>

          <div>
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Password</span>
              <span class="text-[10px] text-emerald-400 font-mono">auto-synced</span>
            </label>
            <input
              type="password"
              [value]="formData().password"
              placeholder="••••••••••••"
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-mono"
            />
          </div>

          <div>
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Confirm Password</span>
              <span class="text-[10px] text-emerald-400 font-mono">100% matched</span>
            </label>
            <input
              type="password"
              [value]="formData().confirmPassword"
              placeholder="••••••••••••"
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors font-mono"
            />
          </div>

          <div class="sm:col-span-2">
            <label class="block text-xs font-inter uppercase tracking-wider text-white/60 mb-1.5 flex justify-between">
              <span>Special Instructions / Bio</span>
              <span class="text-[10px] text-white/30 font-mono">&lt;textarea&gt;</span>
            </label>
            <textarea
              rows="2"
              [value]="formData().bio"
              placeholder="Automated test comments..."
              class="w-full px-4 py-3 bg-black border border-white/15 text-white text-sm focus:border-white focus:outline-none transition-colors resize-none font-inter"
            ></textarea>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            (click)="simulateFill()"
            class="w-full sm:w-auto px-8 py-4 bg-white hover:bg-neutral-200 text-black font-inter font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            <lucide-icon [img]="Zap" class="w-4 h-4 text-black"></lucide-icon>
            <span>Simulate Alt+Shift+F Autofill</span>
          </button>
          <button
            (click)="resetForm()"
            class="w-full sm:w-auto px-6 py-4 bg-black hover:bg-neutral-900 text-white/70 hover:text-white font-inter text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
          >
            <lucide-icon [img]="Trash2" class="w-4 h-4 text-white/50"></lucide-icon>
            <span>Reset</span>
          </button>
        </div>

        <!-- Status Notification -->
        @if (isHydrated()) {
          <div class="mt-6 text-center animate-fadeIn">
            <span class="inline-flex items-center gap-2 px-4 py-1.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
              <lucide-icon [img]="CheckCircle2" class="w-4 h-4"></lucide-icon>
              <span>7 form fields hydrated in 42ms with native property descriptor dispatch</span>
            </span>
          </div>
        }
      </div>
    </section>
  `
})
export class InteractiveDemoComponent {
  readonly Zap = Zap;
  readonly Trash2 = Trash2;
  readonly CheckCircle2 = CheckCircle2;
  readonly Lock = Lock;

  readonly personas: Persona[] = [
    {
      id: 'default',
      name: 'Default US Dev',
      data: {
        fullName: 'Jordan Miller',
        email: 'jordan.miller@example.com',
        phone: '+1 (555) 382-9104',
        address: '742 Evergreen Terrace, Springfield, IL',
        company: 'CloudScale Dynamics',
        role: 'Full Stack Engineer',
        country: 'United States',
        password: 'P@ssw0rd!2026#',
        confirmPassword: 'P@ssw0rd!2026#',
        bio: 'Automated test profile initialized for reactive form verification.'
      }
    },
    {
      id: 'buyer',
      name: 'E-Commerce Buyer',
      data: {
        fullName: 'Elena Rostova',
        email: 'elena.shop@fastmail.org',
        phone: '+1 (555) 749-2041',
        address: '1048 Ocean Avenue, Santa Monica, CA',
        company: 'Freelance Design',
        role: 'Creative Director',
        country: 'United States',
        password: 'Secure#Buyer$88',
        confirmPassword: 'Secure#Buyer$88',
        bio: 'Frequent purchaser profile for checkout flow and address field testing.'
      }
    },
    {
      id: 'enterprise',
      name: 'Enterprise B2B',
      data: {
        fullName: 'Marcus Vance',
        email: 'marcus.vance@megacorp-global.com',
        phone: '+44 20 7946 0912',
        address: '25 Bank Street, Canary Wharf, London',
        company: 'MegaCorp Global Financial',
        role: 'VP of Product Engineering',
        country: 'United Kingdom',
        password: 'Corp!Admin$9942',
        confirmPassword: 'Corp!Admin$9942',
        bio: 'Enterprise lead generation and B2B vendor onboarding form persona.'
      }
    }
  ];

  activePersona = signal<string>('default');
  isHydrated = signal<boolean>(false);

  formData = signal({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    company: '',
    role: '',
    country: '',
    password: '',
    confirmPassword: '',
    bio: ''
  });

  selectPersona(id: string) {
    this.activePersona.set(id);
    const persona = this.personas.find(p => p.id === id);
    if (persona) {
      this.formData.set({ ...persona.data });
      this.isHydrated.set(true);
    }
  }

  simulateFill() {
    const current = this.personas.find(p => p.id === this.activePersona()) || this.personas[0];
    this.formData.set({ ...current.data });
    this.isHydrated.set(true);
  }

  resetForm() {
    this.formData.set({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      company: '',
      role: '',
      country: '',
      password: '',
      confirmPassword: '',
      bio: ''
    });
    this.isHydrated.set(false);
  }
}
