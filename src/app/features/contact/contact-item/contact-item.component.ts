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
    { provide: ControlContainer, useExisting: NgForm }
  ]
})
export class ContactItemComponent {
  @Input({ required: true }) contactData!: ContactData;
  @Input({ required: true }) contactFieldIndex!: string;
  @Input() formSubmitted: boolean = false;
  readonly emailPattern = '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}';
  isChanged: boolean = false;
  placeHolderText: string = "";
  hasError: boolean = false;
  hasFocus: boolean = false;
  errorMessage: string = "";


  ngOnInit() {
    if (this.contactData) {
      this.placeHolderText = this.contactData.placeholterText;
    }

  }

  onInput(field: NgModel): void {
    this.isChanged = true;
    this.checkFildValidation(field);
  }

  onBlur(field: NgModel): void {
    this.isChanged = false;
    this.checkFildValidation(field);
  }

  checkFildValidation(field: NgModel): void {
    const showErrors = this.shouldShowErrors(field);
    this.hasError = showErrors && !!field.invalid;
    this.errorMessage = this.getErrorMessage(field);
  }

  shouldShowErrors(field: NgModel): boolean {
    return !!field.touched || this.formSubmitted;
  }

  getErrorMessage(field: NgModel): string {
    if (field.errors?.['required']) { return this.contactData.errorText; }
    if (field.errors?.['pattern']) { return 'The email address is invalid.'; }
    if (field.errors?.['minlength']) { return `The input is too short. (minimum ${field.errors['minlength'].requiredLength} characters)`; }
    return '';
  }

  hasText(field: NgModel): boolean {
    if (typeof field.value === 'string') {
      return field.value.trim().length > 0;
    }

    return !!field.value;
  }

}
