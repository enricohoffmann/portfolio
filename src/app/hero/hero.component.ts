import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { ButtonComponent } from "../shared/ui/button/button.component";


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
