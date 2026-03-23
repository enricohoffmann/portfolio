import { Component } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactData, ContactSectionData } from '../../interfaces/contact.interface';
import { ButtonComponent } from "../../ui/button/button.component";
import { CheckBoxComponent } from '../../ui/check-box/check-box.component';
import { PrivacyCheck } from '../../interfaces/privacy.interface';
import { Observable } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ContactDataService } from '../../services/contact.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent, FormsModule, ButtonComponent, CheckBoxComponent, AsyncPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private languageService: LanguageService, private contactService: ContactDataService){}

  contactDataFields$: Observable<ContactData[]> = this.languageService.selectByLanguage(this.contactService.getContactFormFieldsDe(), this.contactService.getContactFormFieldsEn());

  contactSectionData$: Observable<ContactSectionData> = this.languageService.selectByLanguage(this.contactService.getContactSectionDataDe(), this.contactService.getContactSectionDataEn());

  privacyCheck: PrivacyCheck = {
    checked: false
  };

  privacyCheckErrorMessage: string = 'Please accept the privacy policy.';

  onContactFormSubmit(contactForm: NgForm){

    //console.log(contactForm.valid);
    //console.log(contactForm.errors);
     
    console.log(contactForm.value);
   
    

    if(contactForm.valid && contactForm.submitted){
      //console.log(contactForm.value);
      //console.log(this.contactDataFields);
    }
  }

}
