import { Component, Input } from '@angular/core';

@Component({
  selector: 'li[app-info-item]',
  standalone: true,
  imports: [],
  templateUrl: './info-item.component.html',
  styleUrl: './info-item.component.scss'
})
export class InfoItemComponent {
  @Input() iconName?: string;
}
