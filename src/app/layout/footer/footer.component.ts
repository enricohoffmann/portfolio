import { Component } from '@angular/core';
import { LogoComponent } from "../../ui/logo/logo.component";
import { DotLinkComponent } from '../../ui/dot-link/dot-link.component';
import { LanguageService } from '../../services/language.service';
import { FooterDataService } from '../../services/footer.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Link } from '../../interfaces/link.interface';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, DotLinkComponent, AsyncPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private languageService: LanguageService, private footerDataService: FooterDataService){}

  footerLinks$: Observable<Link[]> = this.languageService.selectByLanguage(this.footerDataService.getFooterLinksDe(), this.footerDataService.getFooterLinksEn());
  footerSectionData$ = this.languageService.selectByLanguage(this.footerDataService.getFooterDataDe(), this.footerDataService.getFooterDataEn());

}
