import { Component, Input } from '@angular/core';
import { ContactData } from '../../../interfaces/contact.interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [FormsModule],
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

  onBlur(){

    if(this.contactData?.contactValue){ 
      this.hasError = false;
    }else{
      this.placeHolderText = this.contactData?.errorText ?? "";
      this.hasError = true;
    }
    
  }

}
