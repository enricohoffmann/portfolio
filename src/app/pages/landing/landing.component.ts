import { Component, DestroyRef, inject } from '@angular/core';
import { HeroComponent } from "../../features/hero/hero.component";
import { HeaderComponent } from '../../layout/header/header.component';
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
    HeaderComponent,
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


/**
 * @description The LandingComponent is the main component of the landing page of the application. It serves as a container for various sections of the landing page, 
 * including the hero section, about me section, skills section, portfolio section, contact section, and footer. The component also manages the state of the portfolio dialog and handles the 
 * communication between different sections of the landing page. It uses services such as MobileNavFlowService to manage the state of the mobile navigation menu and DisplayService to determine the current display mode 
 * (desktop or mobile) and adjust the behavior of the component accordingly. The component also utilizes Angular's dependency injection system to inject the necessary services and manage subscriptions to 
 * observables for responsive design and user interactions.
 * @namespace LandingComponent
 */
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

  /**
   * @description The mobileMenuOpen$ observable is a derived observable that emits a boolean value indicating whether the mobile menu is currently open or not. It uses the mobileFlow$ observable from the MobileNavFlowService and applies a map operator to transform the emitted flow values into a boolean. If the flow value is 'closed', it emits false, indicating that the mobile menu is closed. For any other flow value, it emits true, indicating that the mobile menu is open. This observable can be used in the template to conditionally display or hide elements based on the state of the mobile menu.
   * @returns Observable<boolean> An observable that emits a boolean value indicating whether the mobile menu is open or closed.
   * @memberof LandingComponent
   */
  mobileMenuOpen$: Observable<boolean> = this.mobileMenuFlowService.mobileFlow$.pipe(
    map(flow => flow === 'closed' ? false : true)
  );

  /**
   * @description The receiveProjectId method is a handler function that is called when a project ID is received from the PortfolioComponent. It takes in a projectId as a parameter and sets the selectedPortfolioById property to the received project ID. It also sets the portfolioDialogOpen property to true, which indicates that the portfolio dialog should be opened to display the details of the selected project. This method allows for communication between the PortfolioComponent and the LandingComponent, enabling the display of specific project details in a dialog when a project is selected from the portfolio section.
   * @param projectId A string representing the ID of the selected project.
   * @returns void
   * @memberof LandingComponent
   * @param projectId A string representing the ID of the selected project.
   */
  receiveProjectId(projectId: string){
    this.selectedPortfolioById = projectId;
    this.portfolioDialogOpen = true;
  }

  /**
   * @description The dialogIsClosed method is a handler function that is called when the portfolio dialog is closed. It takes in a boolean parameter open, which indicates whether the dialog is currently open or not. When the dialog is closed (open is false), the method sets the portfolioDialogOpen property to false, indicating that the portfolio dialog should be closed. This method allows for communication between the PortfolioDialogComponent and the LandingComponent, enabling the closing of the portfolio dialog when the user finishes viewing the project details or decides to close it.
   * @returns void
   * @memberof LandingComponent
   * @param open 
   */
  dialogIsClosed(open: boolean):void{
    this.portfolioDialogOpen = !open;
  }



}
