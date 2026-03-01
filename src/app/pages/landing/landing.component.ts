import { Component } from '@angular/core';
import { HeroComponent } from "../../features/hero/hero.component";
import { AboutMeComponent } from "../../features/aboutMe/about-me.component";
import { SkillsComponent } from "../../features/skills/skills.component";
import { PortfolioComponent } from "../../features/portfolio/portfolio.component";
import { ReferencesComponent } from '../../features/references/references.component';
import { ContactComponent } from '../../features/contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, PortfolioComponent, ReferencesComponent, ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
