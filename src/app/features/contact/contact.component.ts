import { Component, EventEmitter, Output } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactData } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactDataFields: ContactData[] = [
    {
      title: 'What\'s your name?',
      contactValue: '',
      contactType: 'name',
      placeholterText: 'Your name goes here',
      errorText: 'Oops! it seems your name is missing'
    },
    {
      title: 'What\'s your email?',
      contactValue: '',
      contactType: 'email',
      placeholterText: 'youremail@email.com',
      errorText: 'Hoppla! your email is required'
    },
    {
      title: 'How can I help you?',
      contactValue: '',
      contactType: 'message',
      placeholterText: 'Hello Lukas, I am interested in...',
      errorText: 'What do you need to develop?'
    }
  ];


  onContactFormSubmit(contactForm: NgForm){
    if(contactForm.valid && contactForm.submitted){
      console.log(contactForm);
      
    }
  }

}
