import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { ButtonComponent } from "../shared/ui/button/button.component";
import { LogoComponent } from '../shared/ui/logo/logo.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, LogoComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
