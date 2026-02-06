import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-marquee.component.html',
  styleUrl: './hero-marquee.component.scss'
})
export class HeroMarqueeComponent {
  marqueeTextArrayEN: Array<string> = [
    'Available for remote work',
    'Frontend Developer',
    'Based in Tübingen',
    'Open to work',
    'Available for remote work'
  ];
}
