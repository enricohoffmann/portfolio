import { Component, inject, DestroyRef } from '@angular/core';
import { DocumentContentComponent } from '../../features/document-content/document-content.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PrivacyPolicyService } from '../../services/privacy-policy.service';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';
import { HeaderComponent } from "../../layout/header/header.component";
import { LanguageService } from '../../services/language.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MobileNavFlowService } from '../../services/mobileMenu.service';
import { DisplayService } from '../../services/display.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MenuMobileComponent } from '../../layout/header/menu/menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, DocumentContentComponent, FooterComponent, AsyncPipe, MenuMobileComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  private destroyRef = inject(DestroyRef);

  constructor(
    private privacyDataService: PrivacyPolicyService, 
    private languageService: LanguageService,
    private mobileMenuFlowService: MobileNavFlowService,
    private displayService: DisplayService
  ){
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

  privacyPolicyData$: Observable<PageTextContent> =  this.languageService.selectByLanguage(this.privacyDataService.getPrivacyPolicyDe(), this.privacyDataService.getPrivacyPolicyEn());

}
