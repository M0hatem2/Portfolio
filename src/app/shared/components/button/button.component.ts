import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';

  get buttonClasses(): string {
    const baseClasses = 'px-4 py-2 rounded font-sans transition-colors duration-200';
    const variantClasses = {
      primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary',
      secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-2 focus:ring-secondary'
    };
    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    return `${baseClasses} ${variantClasses[this.variant]} ${disabledClasses}`;
  }
}
