import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { InfoItemComponent } from "../../ui/card/info-item/info-item.component";
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AboutMeService } from '../../services/aboutMe.service';
import { AboutMe } from '../../interfaces/aboutMe.interface';
import { DisplayService } from '../../services/display.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardComponent, InfoItemComponent, AsyncPipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
/**
 * @description The AboutMeComponent is an Angular component that displays information about the user. It retrieves the about me data from the AboutMeService and displays it in a card format. The component also uses the LanguageService to select the appropriate language for the content and the DisplayService to determine if the view is in mobile mode or not.
 * 
 * The component has the following properties:
 * - aboutMeData$: An Observable that emits the about me data based on the selected language.
 * - isViewInMobileMode$: An Observable that emits a boolean value indicating whether the view is in mobile mode or not.
 * 
 * The component has a constructor that injects the LanguageService, AboutMeService, and DisplayService to retrieve the necessary data and determine the display mode.
 * @namespace AboutMeComponent
 */
export class AboutMeComponent {
  constructor(private languageService: LanguageService, private aboutMeDataService: AboutMeService, private displayService: DisplayService){}

  aboutMeData$: Observable<AboutMe> = this.languageService.selectByLanguage(this.aboutMeDataService.getAboutMeDataDe(), this.aboutMeDataService.getAboutMeDataEn());

  isViewInMobileMode$: Observable<boolean> = this.displayService.selectViewByDisplayMode(false, true);

}
