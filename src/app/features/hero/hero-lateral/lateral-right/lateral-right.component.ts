import { Component } from '@angular/core';
import { ContactIconComponent } from "../../../../ui/contact-icon/contact-icon.component";
import { LinksService } from '../../../../services/links.service';
import { Link } from '../../../../interfaces/link.interface';
import { DisplayService } from '../../../../services/display.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-lateral-right',
  standalone: true,
  imports: [ContactIconComponent, AsyncPipe],
  templateUrl: './lateral-right.component.html',
  styleUrl: './lateral-right.component.scss'
})
/**
 * @description The LateralRightComponent is an Angular component that represents the right lateral section of the hero component. It is responsible for displaying contact icons and links on the right side of the hero section. 
 * The component uses the LinksService to retrieve the appropriate contact links based on the current display mode (desktop or mobile) using the DisplayService. The template and styles for this component are defined in separate HTML and SCSS files, 
 * respectively. The component is decorated with the 
 * @Component decorator, which specifies the selector, template, and style information for the component. This allows the LateralRightComponent to be easily reused and integrated into other parts of the application where the right lateral 
 * section of the hero component is needed.
 * @namespace LateralRightComponent
 */
export class LateralRightComponent {

  constructor(private displayService: DisplayService, private linkService: LinksService){}

  /**
   * @description The heroContactLinks$ observable is a derived observable that emits an array of Link objects representing the contact links to be displayed in the right lateral section of the hero component. It uses the selectViewByDisplayMode method from the DisplayService to determine which set of contact links to emit based on the current display mode (desktop or mobile). If the display mode is desktop, it emits the contact links retrieved from the getHeroContactLinksDesktop method of the LinksService. If the display mode is mobile, it emits the contact links retrieved from the getHeroContactLinksMobile method of the LinksService. This observable can be used in the template to dynamically display the appropriate contact links based on the user's device or screen size.
   * @returns Observable<Link[]> An observable that emits an array of Link objects representing the contact links for the hero component.
   * @memberof LateralRightComponent
   * @returns Observable<Link[]> An observable that emits an array of Link objects representing the contact links for the hero component.
   */
  heroContactLinks$: Observable<Link[]> = this.displayService.selectViewByDisplayMode(
    this.linkService.getHeroContactLinksDesktop(), this.linkService.getHeroContactLinksMobile());

  /**
   * @description The showMailLink$ observable is a derived observable that emits a boolean value indicating whether to show the mail link in the right lateral section of the hero component. It uses the selectViewByDisplayMode method from the DisplayService to determine whether to emit true or false based on the current display mode (desktop or mobile). If the display mode is desktop, it emits true, indicating that the mail link should be shown. If the display mode is mobile, it emits false, indicating that the mail link should not be shown. This observable can be used in the template to conditionally display or hide the mail link based on the user's device or screen size.
   * @returns Observable<boolean> An observable that emits a boolean value indicating whether to show the mail link in the hero component.
   * @memberof LateralRightComponent
   * @returns Observable<boolean> An observable that emits a boolean value indicating whether to show the mail link in the hero component.
   */
  showMailLink$: Observable<boolean> = this.displayService.selectViewByDisplayMode(true, false);
      
}
