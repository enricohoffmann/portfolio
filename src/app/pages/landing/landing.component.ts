import { Component } from '@angular/core';
import { HeroComponent } from "../../features/hero/hero.component";
import { AboutMeComponent } from "../../features/aboutMe/about-me.component";
import { SkillsComponent } from "../../features/skills/skills.component";
import { PortfolioComponent } from "../../features/portfolio/portfolio.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
