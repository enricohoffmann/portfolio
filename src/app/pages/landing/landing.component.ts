import { Component, DestroyRef, inject } from '@angular/core';
import { HeroComponent } from "../../features/hero/hero.component";
import { AboutMeComponent } from "../../features/aboutMe/about-me.component";
import { SkillsComponent } from "../../features/skills/skills.component";
import { PortfolioComponent } from "../../features/portfolio/portfolio.component";
import { ContactComponent } from '../../features/contact/contact.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PortfolioDialogComponent } from '../../features/portfolio/portfolio-dialog/portfolio-dialog.component';
import { MenuMobileComponent } from '../../layout/header/menu/menu-mobile/menu-mobile.component';
import { MobileNavFlowService } from '../../services/mobileMenu.service';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DisplayService } from '../../services/display.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent, 
    AboutMeComponent, 
    SkillsComponent, 
    PortfolioComponent, 
    ContactComponent, 
    FooterComponent, 
    PortfolioDialogComponent,
    MenuMobileComponent,
    AsyncPipe
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  private destroyRef = inject(DestroyRef);

  portfolioDialogOpen: boolean = false;
  selectedPortfolioById?: string;

  constructor(
    private mobileMenuFlowService: MobileNavFlowService,
    private displayService: DisplayService
  ){
    this.displayService.displayMode$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(displayMode => {
        if (displayMode !== 'DESKTOP') { return; }
        if (this.mobileMenuFlowService.getCurrentMobilNavFlow() === 'closed') { return; }
        this.mobileMenuFlowService.setMobileFlow('closed');
      });
  }

  mobileMenuOpen$: Observable<boolean> = this.mobileMenuFlowService.mobileFlow$.pipe(
    map(flow => flow === 'closed' ? false : true)
  );


  receiveProjectId(projectId: string){
    this.selectedPortfolioById = projectId;
    this.portfolioDialogOpen = true;
  }

  dialogIsClosed(open: boolean):void{
    this.portfolioDialogOpen = !open;
  }



}
