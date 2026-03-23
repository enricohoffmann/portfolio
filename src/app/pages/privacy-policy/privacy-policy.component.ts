import { Component } from '@angular/core';
import { DocumentContentComponent } from '../../features/document-content/document-content.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PrivacyPolicyService } from '../../services/privacy-policy.service';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';
import { HeaderComponent } from "../../layout/header/header.component";
import { LanguageService } from '../../services/language.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, DocumentContentComponent, FooterComponent, AsyncPipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(private privacyDataService: PrivacyPolicyService, private languageService: LanguageService){}

  privacyPolicyData$: Observable<PageTextContent> =  this.languageService.selectByLanguage(this.privacyDataService.getPrivacyPolicyDe(), this.privacyDataService.getPrivacyPolicyEn());

}
