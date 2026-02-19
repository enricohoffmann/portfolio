import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { InfoItemComponent } from "../../ui/card/info-item/info-item.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardComponent, InfoItemComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
