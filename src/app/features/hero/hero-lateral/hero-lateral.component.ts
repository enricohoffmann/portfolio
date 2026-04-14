import { Component } from '@angular/core';
import { LateralLeftComponent } from "./lateral-left/lateral-left.component";
import { LateralRightComponent } from "./lateral-right/lateral-right.component";
import { DisplayService } from '../../../services/display.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-lateral',
  standalone: true,
  imports: [LateralLeftComponent, LateralRightComponent, AsyncPipe],
  templateUrl: './hero-lateral.component.html',
  styleUrl: './hero-lateral.component.scss'
})

/**
 * @description The HeroLateralComponent is an Angular component that represents the lateral section of the hero section on the landing page. It is responsible for displaying content on the left and 
 * right sides of the hero section, which may include images, text, or other elements. The component also interacts with the DisplayService to determine whether the application is currently in mobile mode or desktop mode, 
 * allowing it to adjust its layout and content accordingly for a responsive design. The component uses Angular's dependency injection to inject the DisplayService and subscribes to its displayMode$ observable to react to 
 * changes in the display mode. The template of the component likely contains conditional rendering based on the current display mode, showing different content or layouts for mobile and desktop views.
 * @namespace HeroLateralComponent
 * @namespace HeroLateralComponent
 */
export class HeroLateralComponent {
  constructor(private displayService: DisplayService){}

  /**
   * @description The isInMobileMode$ observable is a derived observable that emits a boolean value indicating whether the application is currently in mobile mode or not. 
   * It uses the selectViewByDisplayMode method from the DisplayService to determine the current display mode and emits true if the display mode is 'MOBILE' and false if it is 'DESKTOP'. 
   * This observable can be used in the template to conditionally render content or apply different styles based on whether the user is viewing the application on a mobile device or a desktop.
   * @returns Observable<boolean> An observable that emits a boolean value indicating whether the application is in mobile mode or not.
   * @memberof HeroLateralComponent
   */
  isInMobileMode$: Observable<boolean> = this.displayService.selectViewByDisplayMode(false, true);
}
