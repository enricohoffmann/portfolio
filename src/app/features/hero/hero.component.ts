import { Component } from '@angular/core';
import { HeaderComponent } from './../../layout/header/header.component';
import { ButtonComponent } from "./../../ui/button/button.component";
import { HeroMarqueeComponent } from "./hero-marquee/hero-marquee.component";
import { HeroLateralComponent } from "./hero-lateral/hero-lateral.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, HeroMarqueeComponent, HeroLateralComponent, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
