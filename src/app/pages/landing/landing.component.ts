import { Component } from '@angular/core';
import { HeroComponent } from "../../features/hero/hero.component";
import { AboutMeComponent } from "../../features/aboutMe/about-me/about-me.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
