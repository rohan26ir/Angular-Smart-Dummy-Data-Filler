import { Component, input } from '@angular/core';
import { LucideAngularModule, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    @if (variant() === 'black') {
      <a
        [href]="href()"
        class="group inline-flex items-center gap-2.5 bg-black hover:bg-neutral-900 text-white font-inter text-[11px] sm:text-xs font-semibold tracking-widest uppercase px-5 sm:px-7 py-3 sm:py-4 transition-all duration-300 border border-white/10 hover:border-white/30 active:scale-95 shadow-xl"
      >
        <span>{{ text() }}</span>
        @if (showArrow()) {
          <lucide-icon
            [img]="ArrowUpRight"
            class="w-4 h-4 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          ></lucide-icon>
        }
      </a>
    } @else {
      <a
        [href]="href()"
        class="group inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
      >
        <span>{{ text() }}</span>
        @if (showArrow()) {
          <lucide-icon
            [img]="ArrowUpRight"
            class="w-3.5 h-3.5 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          ></lucide-icon>
        }
      </a>
    }
  `
})
export class CtaButtonComponent {
  readonly ArrowUpRight = ArrowUpRight;
  text = input<string>('SEE OUR WORK');
  variant = input<'black' | 'outline'>('black');
  href = input<string>('#');
  showArrow = input<boolean>(true);
}
