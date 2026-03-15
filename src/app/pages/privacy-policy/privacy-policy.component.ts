import { Component } from '@angular/core';
import { HeroComponent } from '../../features/hero/hero.component';
import { DocumentContentComponent } from '../../features/document-content/document-content.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { PrivacyPolicyService } from '../../services/privacy-policy.service';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';
import { HeaderComponent } from "../../layout/header/header.component";


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent, DocumentContentComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  privacyPolicyData?: PageTextContent;

  constructor(private privacyDataService: PrivacyPolicyService){}

  ngOnInit(){
    this.privacyPolicyData = this.privacyDataService.getPrivacyPolicy();
  }

}
