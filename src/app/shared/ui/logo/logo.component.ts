import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() width?: number;
  @Input() hoverable : boolean = true;
  @Input() variant: 'full' | 'outline' | 'auto' = 'auto';
}
