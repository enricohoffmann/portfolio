import { Component, inject, DestroyRef } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { ImprintService } from '../../services/imprint.service';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';
import { DocumentContentComponent } from "../../features/document-content/document-content.component";
import { LanguageService } from '../../services/language.service';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MenuMobileComponent } from '../../layout/header/menu/menu-mobile/menu-mobile.component';
import { MobileNavFlowService } from '../../services/mobileMenu.service';
import { DisplayService } from '../../services/display.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DocumentContentComponent, AsyncPipe, MenuMobileComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  private destroyRef = inject(DestroyRef);

  constructor(
    private imprintDataService: ImprintService,
    private languageService: LanguageService,
    private mobileMenuFlowService: MobileNavFlowService,
    private displayService: DisplayService
  ) {
    this.displayService.displayMode$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(displayMode => {
        if (displayMode !== 'DESKTOP') { return; }
        if (this.mobileMenuFlowService.getCurrentMobilNavFlow() === 'closed') { return; }
        this.mobileMenuFlowService.setMobileFlow('closed');
      });
  }

  mobileMenuOpen$: Observable<boolean> = this.mobileMenuFlowService.mobileFlow$.pipe(
    map(flow => flow === 'closed' ? false : true)
  );

  imprintData$: Observable<PageTextContent> = this.languageService.selectByLanguage(this.imprintDataService.getLegalNoticeDe(), this.imprintDataService.getLegalNoticeEn());
}

