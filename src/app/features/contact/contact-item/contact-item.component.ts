import { Component, Input } from '@angular/core';
import { ContactData } from '../../../interfaces/contact.interface';
import { NgTemplateOutlet } from '@angular/common';
import { ControlContainer, FormsModule, NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [FormsModule, NgTemplateOutlet],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: NgForm }
  ]
})

/**
 * @description The ContactItemComponent is an Angular component that represents a single contact item in a contact form. It takes in contact data and displays an input field for the user to enter their contact information. The component also handles validation and error messages for the input field.
 * 
 * The component has the following properties:
 * - contactData: An object containing the contact information and validation rules for the input field.
 * - contactFieldIndex: A string representing the index of the contact field in the form.
 * - formSubmitted: A boolean indicating whether the form has been submitted or not.
 * The component has the following methods:
 * - ngOnInit: Initializes the component and sets the placeholder text for the input field based on the contact data.
 * - onInput: Called when the user inputs data into the field. It checks for validation errors and updates the error messages accordingly.
 * - onBlur: Called when the user leaves the input field. It checks for validation errors and updates the error messages accordingly.
 * - checkFildValidation: A helper method that checks for validation errors and updates the error messages based on the current state of the input field.
 * - shouldShowErrors: A helper method that determines whether to show validation errors based on whether the field has been touched or if the form has been submitted.
 * - getErrorMessage: A helper method that retrieves the appropriate error message based on the validation errors present in the input field.
 * - getErrorMessageForRequired: A helper method that retrieves the error message for required fields if the required validation error is present.
 * - hasText: A helper method that checks if the input field has any text entered by the user.
 * Overall, the ContactItemComponent is responsible for rendering a contact input field, handling user input, and providing validation feedback to the user based on the defined contact data and validation rules.
 * @namespace ContactItemComponent
 */
export class ContactItemComponent {
  @Input({ required: true }) contactData!: ContactData;
  @Input({ required: true }) contactFieldIndex!: string;
  @Input() formSubmitted: boolean = false;
  readonly emailPattern = '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}';
  isChanged: boolean = false;
  placeHolderText: string = "";
  hasError: boolean = false;
  hasFocus: boolean = false;
  errorMessageForRequired: string = "";
  errorMessage: string = "";

  /**
   * @description The ngOnInit method is a lifecycle hook in Angular that is called after the component has been initialized. 
   * In this method, we check if the contactData input property is defined and if so, we set the placeHolderText property to the value of the placeholterText property from the contactData object.
   * This allows us to dynamically set the placeholder text for the input field based on the provided contact data.
   * @returns void
   * @memberof ContactItemComponent
   */
  ngOnInit():void {
    if (this.contactData) {
      this.placeHolderText = this.contactData.placeholterText;
      this.errorMessageForRequired = this.getErrorMessageForRequired();
    }
  }

  /**
   * @description The onInput method is called when the user inputs data into the contact field. It takes in a parameter called field, which is of type NgModel. 
   * This method sets the isChanged property to true, indicating that the user has made changes to the input field. It then calls the checkFildValidation method, passing in the field parameter, to check for any validation errors and update the error messages accordingly.
   * @returns void
   * @memberof ContactItemComponent
   * @param field The NgModel object representing the input field.
   */
  onInput(field: NgModel): void {
    this.isChanged = true;
    this.checkFildValidation(field);
  }
  /**
   * @description The onBlur method is called when the user leaves the input field. It takes in a parameter called field, which is of type NgModel. 
   * This method sets the isChanged property to false, indicating that the user has stopped making changes to the input field. It then calls the checkFildValidation method, passing in the field parameter, to check for any validation errors and update the error messages accordingly.  
   * @returns void
   * @memberof ContactItemComponent
   * @param field The NgModel object representing the input field.
   */

  onBlur(field: NgModel): void {
    this.isChanged = false;
    this.checkFildValidation(field);
  }

  /**
   * @description The checkFildValidation method is called to check for any validation errors and update the error messages accordingly. It takes in a parameter called field, which is of type NgModel.
   * @returns void
   * @memberof ContactItemComponent
   * @param field The NgModel object representing the input field.
   */

  checkFildValidation(field: NgModel): void {
    const showErrors = this.shouldShowErrors(field);
    this.hasError = showErrors && !!field.invalid;
    this.errorMessage = this.getErrorMessage(field);
  }

  /**
   * @description The shouldShowErrors method is a helper method that determines whether to show validation errors based on whether the field has been touched or if the form has been submitted. It takes in a parameter called field, which is of type NgModel.
   * @returns A boolean value indicating whether to show validation errors or not.
   * @memberof ContactItemComponent
   * @param field The NgModel object representing the input field.
   * @returns A boolean value indicating whether to show validation errors or not.
   */
  shouldShowErrors(field: NgModel): boolean {
    return !!field.touched || this.formSubmitted;
  }

  /**
   * @description The getErrorMessage method is a helper method that retrieves the appropriate error message based on the validation errors present in the input field. It takes in a parameter called field, which is of type NgModel.
   * The method iterates through the errors defined in the contactData object and checks if any of the validation errors are present in the field's errors. If a validation error is found, it constructs the appropriate error message based on the type of error (e.g., minlength) and returns it.
   * @memberof ContactItemComponent
   * @param field The NgModel object representing the input field.
   * @returns A string containing the appropriate error message based on the validation errors present in the input field.
   */
  getErrorMessage(field: NgModel): string {

    let message: string = '';

    this.contactData.errors.forEach((fieldError) => {
      if(field.errors?.[fieldError.contactErrorKey]){
        if(fieldError.contactErrorKey === 'minlength'){
          message = `${fieldError.contactErrorMessagePartOne} ${field.errors['minlength'].requiredLength} ${fieldError.contactErrorMessagePartTwo})`;
        } else {
          message = fieldError.contactErrorMessagePartOne;
        }
      }

    });

    return message;

  }

  /**
   * @description The getErrorMessageForRequired method is a helper method that retrieves the error message for required fields if the required validation error is present. It checks if there is an error object in the contactData.errors array with a contactErrorKey of 'required'. If such an error object is found, it returns the contactErrorMessagePartOne property of that error object as the error message. If no such error object is found, it returns an empty string.
   * @memberof ContactItemComponent
   * @returns A string containing the error message for required fields if the required validation error is present, otherwise an empty string.
   */
  getErrorMessageForRequired(): string {
    const errorMessageObject = this.contactData.errors.find(error => error.contactErrorKey === 'required');
    if(errorMessageObject){
      return errorMessageObject.contactErrorMessagePartOne;
    } else {
      return '';
    }
  }

  /**
   * @description The hasText method is a helper method that checks if the input field has any text. It takes in a parameter called field, which is of type NgModel.
   * @memberof ContactItemComponent
   * @param field The NgModel object representing the input field.
   * @returns A boolean value indicating whether the input field has any text or not.
   */
  hasText(field: NgModel): boolean {
    if (typeof field.value === 'string') {
      return field.value.trim().length > 0;
    }

    return !!field.value;
  }

}
