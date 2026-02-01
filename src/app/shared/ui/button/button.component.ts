import { CommonModule } from '@angular/common';
import { Component, Input, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() iconPath?: string;
  @Input() disabled: boolean = false;

  isHovered: boolean = false;

  @ViewChild('label', { static: true }) labelRef!: ElementRef<HTMLSpanElement>;

  constructor() {

  }

  onMouseEnter() {
    this.isHovered = true;
    
  }

  onMouseLeave() {
    const spanElement = this.labelRef.nativeElement;
    const currentTransform = getComputedStyle(spanElement).transform;
    spanElement.style.transform = currentTransform;
    spanElement.style.animation = 'none';
    this.isHovered = false;
    requestAnimationFrame(() => {
      spanElement.style.transform = 'translateX(0)';
      window.setTimeout(() => {
        spanElement.style.animation = '';
        spanElement.style.transform = '';
      }, 300);
    });

  }

}
