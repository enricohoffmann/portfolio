import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-menu-image',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-menu-image.component.html',
  styleUrl: './portfolio-menu-image.component.scss'
})
export class PortfolioMenuImageComponent {
  @Input() imageName?: string;
  @Input() currentMenuItemIndex?: string;
}
