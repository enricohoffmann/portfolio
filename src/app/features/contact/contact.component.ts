import { Component, EventEmitter, Output } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactData } from '../../interfaces/contact.interface';
import { ButtonComponent } from "../../ui/button/button.component";
import { CheckBoxComponent } from '../../ui/check-box/check-box.component';
import { PrivacyCheck } from '../../interfaces/privacy.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent, FormsModule, ButtonComponent, CheckBoxComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactDataFields: ContactData[] = [
    {
      title: 'What\'s your name?',
      contactValue: '',
      contactField: 'name',
      placeholterText: 'Your name goes here',
      errorText: 'Oops! it seems your name is missing'
    },
    {
      title: 'What\'s your email?',
      contactValue: '',
      contactField: 'email',
      placeholterText: 'youremail@email.com',
      errorText: 'Hoppla! your email is required'
    },
    {
      title: 'How can I help you?',
      contactValue: '',
      contactField: 'message',
      placeholterText: 'Hello Lukas, I am interested in...',
      errorText: 'What do you need to develop?'
    }
  ];

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
