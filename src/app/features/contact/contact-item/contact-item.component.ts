import { Component, Input } from '@angular/core';
import { ContactData } from '../../../interfaces/contact.interface';
import { ControlContainer, FormsModule, NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss',
  viewProviders: [
    {provide: ControlContainer, useExisting: NgForm}
  ]
})
export class ContactItemComponent {
  @Input({required: true}) contactData!: ContactData;
  @Input({required: true}) contactFieldIndex!: string;
  readonly emailPattern = '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}';
  isChanged: boolean = false;
  placeHolderText: string = "";
  hasError: boolean = false;
  hasFocus: boolean = false;
  errorMessage: string = "";


  ngOnInit(){
    if(this.contactData){
      this.placeHolderText = this.contactData.placeholterText;
    }
    
  }

  onMouseEnter(){
    
  }

  onMouseLeave(){
    
  }

  onInput(field: NgModel): void{
    this.isChanged = true;
    this.checkFildValidation(field);
  }

  onBlur(field: NgModel): void{
    this.isChanged = false;
    this.checkFildValidation(field);
  }

  checkFildValidation(field: NgModel): void{
    const showErrors = !!field.touched;
    this.hasError = showErrors && !!field.invalid;

    if(!showErrors){
      this.errorMessage = "";
      return;
    }

    if(field.errors?.['required']){
      this.errorMessage = this.contactData.errorText;
      return;
    }

    if(field.errors?.['pattern']){
      this.errorMessage = 'The email address is invalid.';
      return;
    }

    if(field.errors?.['minlength']){
      this.errorMessage = `The input is too short. (minimum ${field.errors['minlength'].requiredLength} characters)`;
      return;
    }

    if(field.valid){
      this.errorMessage = "";
    }

  }

  hasText(field: NgModel): boolean {
    if (typeof field.value === 'string') {
      return field.value.trim().length > 0;
    }

    return !!field.value;
  }

}
