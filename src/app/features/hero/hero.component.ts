import { Component } from '@angular/core';
import { HeaderComponent } from './../../layout/header/header.component';
import { ButtonComponent } from "./../../ui/button/button.component";
import { HeroMarqueeComponent } from "./hero-marquee/hero-marquee.component";
import { HeroLateralComponent } from "./hero-lateral/hero-lateral.component";
import { LanguageService } from '../../services/language.service';
import { LinksService } from '../../services/links.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Link } from '../../interfaces/link.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, HeroMarqueeComponent, HeroLateralComponent, AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

/**
 * @description The HeroComponent is an Angular component that represents the hero section of the landing page. 
 * It serves as the introductory section of the website, providing a brief overview of the developer and showcasing key information. The component utilizes services such as 
 * LanguageService and LinksService to retrieve localized content and links for the hero section. It also defines observables to manage the dynamic content displayed in the hero section, such as the developer's 
 * title and the links for the hero buttons. The component is designed to be visually appealing and engaging, capturing the attention of visitors and encouraging them to explore further into the website.
 * @namespace HeroComponent
 */
export class HeroComponent {
  constructor(private languageService: LanguageService, private linksService: LinksService){}

  /**
   * @description The developer$ observable is a derived observable that emits a string representing the developer's title based on the selected language. It uses the selectByLanguage method from the LanguageService to retrieve the appropriate title for the hero section. If the selected language is German, it emits 'Frontend Entwickler', and if the selected language is English, it emits 'Frontend Developer'. This observable can be used in the template to display the developer's title dynamically based on the user's language preference.
   * @returns Observable<string> An observable that emits a string representing the developer's title based on the selected language.
   * @memberof HeroComponent
   */
  developer$: Observable<string> = this.languageService.selectByLanguage('Frontend Entwickler', "Frontend Developer");

  /**
   * @description The heroButtonLinks$ observable is a derived observable that emits an array of Link objects representing the links for the hero buttons based on the selected language. It uses the selectByLanguage method from the LanguageService to retrieve the appropriate links for the hero section. If the selected language is German, it emits the result of getHeroButtonLinksDe() from the LinksService, and if the selected language is English, it emits the result of getHeroButtonLinksEn() from the LinksService. This observable can be used in the template to display the hero button links dynamically based on the user's language preference.
   * @returns Observable<Link[]> An observable that emits an array of Link objects representing the hero button links based on the selected language.
   * @memberof HeroComponent
   */
  heroButtonLinks$: Observable<Link[]> = this.languageService.selectByLanguage(this.linksService.getHeroButtonLinksDe(), this.linksService.getHeroButtonLinksEn());     

}
