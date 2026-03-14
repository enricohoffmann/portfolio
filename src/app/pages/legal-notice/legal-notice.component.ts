import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterComponent } from "../../layout/footer/footer.component";
import { ImprintService } from '../../services/imprint.service';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

  imprintData?: PageTextContent;

  constructor(private imprintDataService: ImprintService){}

  ngOnInit(){
    this.imprintData = this.imprintDataService.getLegalNoticeEn();
    console.log(this.imprintData);
    
  }
}
