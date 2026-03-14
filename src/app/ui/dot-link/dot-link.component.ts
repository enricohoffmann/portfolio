import { Component, Input } from '@angular/core';
import { Link } from '../../interfaces/link.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dot-link',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dot-link.component.html',
  styleUrl: './dot-link.component.scss'
})
export class DotLinkComponent {
  @Input({ required: true }) link!: Link;

}
