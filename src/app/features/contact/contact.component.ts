import { Component, EventEmitter, Output } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactFields = [
    {
      title: 'What\'s your name?',
      placeholterText: 'Your name goes here',
      errorText: 'Oops! it seems your name is missing'
    },
    {
      title: 'What\'s your email?',
      placeholterText: 'youremail@email.com',
      errorText: 'Hoppla! your email is required'
    },
    {
      title: 'How can I help you?',
      placeholterText: 'Hello Lukas, I am interested in...',
      errorText: 'What do you need to develop?'
    }
  ];

}
