import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-icon',
  standalone: true,
  imports: [],
  templateUrl: './contact-icon.component.html',
  styleUrl: './contact-icon.component.scss'
})
export class ContactIconComponent {
  @Input() iconName?: string;


}
