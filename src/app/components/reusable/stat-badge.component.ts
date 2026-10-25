import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-badge',
  standalone: true,
  template: `
    <div class="flex flex-col">
      <span class="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
        {{ value() }}
      </span>
      <span class="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1 font-medium font-inter">
        {{ label() }}
      </span>
    </div>
  `
})
export class StatBadgeComponent {
  value = input.required<string>();
  label = input.required<string>();
}
