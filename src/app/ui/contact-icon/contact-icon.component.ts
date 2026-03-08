import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Link } from '../../interfaces/link.interface';


@Component({
  selector: 'app-contact-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-icon.component.html',
  styleUrl: './contact-icon.component.scss'
})
export class ContactIconComponent {
  @Input({required: true}) iconLink!: Link
}

