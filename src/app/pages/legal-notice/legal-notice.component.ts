import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { ImprintService } from '../../services/imprint.service';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';
import { DocumentContentComponent } from "../../features/document-content/document-content.component";
import { LanguageService } from '../../services/language.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DocumentContentComponent, AsyncPipe],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  constructor(private imprintDataService: ImprintService, private languageService: LanguageService) { }

  imprintData$: Observable<PageTextContent> = this.languageService.selectByLanguage(this.imprintDataService.getLegalNoticeDe(), this.imprintDataService.getLegalNoticeEn());
}
