import { Component } from '@angular/core';
import { HeaderComponent } from './../../layout/header/header.component';
import { ButtonComponent } from "./../../ui/button/button.component";
import { HeroMarqueeComponent } from "./hero-marquee/hero-marquee.component";
import { HeroLateralComponent } from "./hero-lateral/hero-lateral.component";
import { LanguageService } from '../../services/language.service';
import { LinksService } from '../../services/links.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { Link } from '../../interfaces/link.interface';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, HeroMarqueeComponent, HeroLateralComponent, AsyncPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private languageService: LanguageService, private linksService: LinksService){}

  developer$: Observable<string> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? 'Frontend Entwickler' : "Frontend Developer")
  );

  heroButtonLinks$: Observable<Link[]> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? this.linksService.getHeroButtonLinksDe() : this.linksService.getHeroButtonLinksEn())
  );


}
