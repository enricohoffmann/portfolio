import { Component } from '@angular/core';
import { LogoComponent } from "../../ui/logo/logo.component";
import { Link } from '../../interfaces/link.interface';
import { DotLinkComponent } from '../../ui/dot-link/dot-link.component';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { FooterDataService } from '../../services/footer.service';
import { map } from 'rxjs';
import { FooterData } from '../../interfaces/footer.interface';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, DotLinkComponent, AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private languageService: LanguageService, private footerDataService: FooterDataService){}

  footerLinks$: Observable<Link[]> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? this.footerDataService.getFooterLinksDe() : this.footerDataService.getFooterLinksEn())
  );

  footerSectionData$: Observable<FooterData> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? this.footerDataService.getFooterDataDe() : this.footerDataService.getFooterDataEn())
  );

}
