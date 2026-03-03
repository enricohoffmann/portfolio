import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactData } from '../../../interfaces/contact.interface';
@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() contactData?: ContactData;
  @Input() contactFieldIndex?: string;
  inputValue?: string;
  isChanged: boolean = false;
  placeHolderText: string = "";
  hasError: boolean = false;

  ngOnInit(){
    if(this.contactData){
      this.placeHolderText = this.contactData.placeholterText;
    }
    
  }

  onMouseEnter(){
    
  }

  onMouseLeave(){
    
  }

  onInput(): void{
    this.isChanged = true;
    this.hasError = false;
  }

  onBlur(value: string){
    if(value){
      if(this.contactData){
        this.contactData.contactType = value;
      }
    }else{
      if(this.contactData){
        this.placeHolderText = this.contactData.errorText;
      this.hasError = true;
      }
      
    }
  }

}
