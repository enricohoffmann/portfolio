import { Component } from '@angular/core';
import { HeroComponent } from "../../features/hero/hero.component";
import { AboutMeComponent } from "../../features/aboutMe/about-me.component";
import { SkillsComponent } from "../../features/skills/skills.component";
import { PortfolioComponent } from "../../features/portfolio/portfolio.component";
import { ReferencesComponent } from '../../features/references/references.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PortfolioDialogComponent } from '../../features/portfolio/portfolio-dialog/portfolio-dialog.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent, 
    AboutMeComponent, 
    SkillsComponent, 
    PortfolioComponent, 
    ReferencesComponent, 
    ContactComponent, 
    FooterComponent, 
    PortfolioDialogComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  portfolioDialogOpen: boolean = false;
  selectedProject: {} = {};

  onDialogOpenSignal(projektEntry: {}){
    this.selectedProject = projektEntry;
    this.portfolioDialogOpen = true;
  }

  dialogIsClosed(open: boolean):void{
    this.portfolioDialogOpen = !open;
  }

}
