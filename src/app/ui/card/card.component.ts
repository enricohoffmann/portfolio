import { Component, Input } from '@angular/core';
import { EmptyComponent } from "../../app.routes";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [EmptyComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardType: 'aboutMe' | 'skills' | 'references' | 'dialog' | 'normal' = 'normal';
  @Input() cardIsActiv: boolean = false;
}
