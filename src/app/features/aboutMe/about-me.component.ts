import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { InfoItemComponent } from "../../ui/card/info-item/info-item.component";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { AboutMeService } from '../../services/aboutMe.service';
import { AboutMe } from '../../interfaces/aboutMe.interface';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CardComponent, InfoItemComponent, AsyncPipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  constructor(private languageService: LanguageService, private aboutMeDataService: AboutMeService){}

  aboutMeData$: Observable<AboutMe> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? this.aboutMeDataService.getAboutMeDataDe() : this.aboutMeDataService.getAboutMeDataEn())
  );
}
