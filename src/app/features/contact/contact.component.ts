import { Component } from '@angular/core';
import { ContactItemComponent } from './contact-item/contact-item.component';
import { NgForm, FormsModule } from '@angular/forms';
import { ContactData, ContactSectionData } from '../../interfaces/contact.interface';
import { ButtonComponent } from "../../ui/button/button.component";
import { CheckBoxComponent } from '../../ui/check-box/check-box.component';
import { PrivacyCheck } from '../../interfaces/privacy.interface';
import { Observable, firstValueFrom } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ContactDataService } from '../../services/contact.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MailResponse } from '../../interfaces/mailResponse.interface';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent, FormsModule, ButtonComponent, CheckBoxComponent, AsyncPipe, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

/**
 * @description The ContactComponent is an Angular component that represents a contact form on a website. It allows users to input their contact information and send a message to the website owner. The component handles form submission, validation, and displays success or error messages based on the response from the server.
 * The component has the following properties:
 * - contactDataFields$: An observable that provides the contact data fields to be displayed in the form, which are selected based on the current language.
 * - contactSectionData$: An observable that provides the section data for the contact form, which includes various text elements to be displayed in the form, also selected based on the current language.
 * - contactPrivacyAcceptErrorMessage$: An observable that provides the error message to be displayed when the user has not accepted the privacy policy, selected based on the current language.
 * - mailResponseMessages$: An observable that provides the possible mail response messages from the server, selected based on the current language.
 * - submitAttempted: A boolean that indicates whether the form submission has been attempted or not.
 *  - isSending: A boolean that indicates whether the form is currently in the process of sending the message to the server.
 * - serverMessage: A string that holds the message to be displayed to the user based on the response from the server. 
 * - serverMessageType: A string that indicates the type of message to be displayed to the user based on the response from the server.
 * @namespace ContactComponent
 */
export class ContactComponent {
  private readonly sendMailUrl = '/phpScript/send_mail.php';
  private readonly clientCooldownMs = 30000;
  private lastSubmitAt = 0;

  constructor(
    private languageService: LanguageService,
    private contactService: ContactDataService,
    private http: HttpClient
  ) { }

  contactDataFields$: Observable<ContactData[]> = this.languageService.selectByLanguage(this.contactService.getContactFormFieldsDe(), this.contactService.getContactFormFieldsEn());
  contactSectionData$: Observable<ContactSectionData> = this.languageService.selectByLanguage(this.contactService.getContactSectionDataDe(), this.contactService.getContactSectionDataEn());
  contactPrivacyAcceptErrorMessage$: Observable<string> = this.languageService.selectByLanguage(this.contactService.getContactPrivacyAcceptErrorDe(), this.contactService.getContactPrivacyAcceptErrorEn());
  mailResponseMessages$: Observable<MailResponse[]> = this.languageService.selectByLanguage(this.contactService.getContactMailResponseMessagesDe(), this.contactService.getContactMailResponseMessagesEn());

  submitAttempted = false;
  isSending = false;
  serverMessage = '';
  serverMessageType: 'success' | 'error' | '' = '';

  privacyCheck: PrivacyCheck = {
    checked: false
  };

  /**
   * @description The onContactFormSubmit method is called when the user submits the contact form. It first checks if the form is valid and if the privacy policy has been accepted. 
   * If not, it marks all form controls as touched to trigger validation messages. If the form is valid and the privacy policy is accepted, it checks if a submission is already in progress or if sending is currently possible based on a cooldown mechanism. 
   * If everything is in order, it creates a payload from the form data, sets the state to indicate that it is ready to send, and then sends the mail to the server. After receiving the response, 
   * it analyzes the response and updates the server message and type accordingly. If the response indicates success, it resets the contact form and clears the server message after a short delay.
   * @param contactForm The NgForm object representing the contact form.
   * @returns void
   * @memberof ContactComponent
   */
  async onContactFormSubmit(contactForm: NgForm) {
    this.submitAttempted = true;

    if (!contactForm.valid || !this.privacyCheck.checked) {
      Object.values(contactForm.controls).forEach(inputFields => inputFields.markAsTouched());
      return;
    }

    if (this.isSending) { return; }

    if (!this.checkWhetherSendingIsCurrentlyPossible()) { return; }
    const payLoad = this.createPayload(contactForm);
    this.setReadyToSend();
    const responeResult = await this.sendMailAndReadResponse(payLoad);
    if (responeResult === null) { return; }
    await this.analyzeTheEmailResponse(responeResult);

    if(this.serverMessageType === 'success'){
      this.resetContactForm(contactForm);
      this.resetServerMessageAndType();
    }

  }

  /**
   * @description The createPayload method is a helper method that takes in the contact form data and creates a payload object to be sent to the server. It extracts the name, email, 
   * and message values from the form and constructs an object with these properties.
   * @param contactForm The NgForm object representing the contact form.
   * @returns An object containing the name, email, and message values from the form.
   */
  private createPayload(contactForm: NgForm): Object {
    return {
      name: contactForm.value.name,
      email: contactForm.value.email,
      message: contactForm.value.message
    }
  }

  /**
   * @description The getTimeForSendingPause method is a helper method that calculates the remaining time for the sending pause based on the last submission time and the defined cooldown period. 
   * It checks if the current time minus the last submission time is less than the cooldown period. If it is, it calculates the seconds left for the pause and returns that value. If the cooldown period has already passed, it returns 0, indicating that sending is currently possible.
   * @returns The number of seconds left for the sending pause, or 0 if sending is currently possible.
   * @memberof ContactComponent
   */
  private getTimeForSendingPause(): number {
    const now = Date.now();
    if (now - this.lastSubmitAt < this.clientCooldownMs) {
      const secondsLeft = Math.ceil((this.clientCooldownMs - (now - this.lastSubmitAt)) / 1000);
      return secondsLeft;
    } else {
      return 0;
    }
  }

  /**
   * @description The setMessageForSendingPause method is a helper method that sets the server message and type when the user tries to send a message during the cooldown period. 
   * It takes in the number of seconds left for the pause as a parameter and constructs an appropriate message to inform the user about the remaining time before they can send another message. The message is set based on the current language.
   * @returns void
   * @memberof ContactComponent
   * @param secondsLeft The number of seconds left for the sending pause.
   */
  private setMessageForSendingPause(secondsLeft: number): void {
    this.serverMessageType = 'error';
    this.serverMessage = this.languageService.getCurrentLanguage() === 'DE'
      ? `Bitte warte noch ${secondsLeft} Sekunden, bevor du erneut sendest.`
      : `Please wait ${secondsLeft} seconds before sending again.`
  }

  /**
   * @description The checkWhetherSendingIsCurrentlyPossible method is a helper method that checks if sending a message is currently possible based on the cooldown mechanism. 
   * It calls the getTimeForSendingPause method to determine if there is still time left for the pause. If there is no time left (i.e., the cooldown period has passed), it returns true, indicating that sending is possible. If there is still time left, it sets the appropriate message for the user and returns false, indicating that sending is not currently possible.
   * @returns A boolean value indicating whether sending a message is currently possible or not.
   * @memberof ContactComponent
   */
  private checkWhetherSendingIsCurrentlyPossible(): boolean {
    const timeLeft = this.getTimeForSendingPause();
    if (timeLeft === 0) {
      return true;
    } else {
      this.setMessageForSendingPause(timeLeft);
      return false;
    }

  }

  /**
   * @description The setReadyToSend method is a helper method that sets the state of the component to indicate that it is ready to send the message to the server. It sets the isSending property to true, 
   * indicating that the sending process is in progress, and clears any existing server messages and types to prepare for the new response.
   * @returns void
   * @memberof ContactComponent
   */
  private setReadyToSend(): void {
    this.isSending = true;
    this.serverMessage = '';
    this.serverMessageType = '';
  }

  /**
   * @description The sendMailAndReadResponse method is a helper method that sends the mail to the server using an HTTP POST request and reads the response. It takes in a payload object containing the form data to be sent to the server.
   * The method uses the HttpClient to send the POST request to the defined URL and waits for the response. If the request is successful, it updates the last submission time, resets the submitAttempted state, and sets isSending to false before returning the response. If there is an error during the request, it catches the error, sets isSending to false, and returns null.
   * @memberof ContactComponent
   * @param payload An object containing the form data to be sent to the server.
   * @returns A Promise that resolves to a MailResponse object if the request is successful, or null if there is an error.
   */
  private async sendMailAndReadResponse(payload: Object): Promise<MailResponse | null> {
    try {
      const response = await firstValueFrom(this.http.post<MailResponse>(this.sendMailUrl, payload));
      this.lastSubmitAt = Date.now();
        this.submitAttempted = false;
        this.isSending = false;
        return response;

    } catch {
      this.isSending = false;
      return null;
    }
  }

  /**
   * @description The analyzeTheEmailResponse method is a helper method that takes in the response from the server after sending the mail and analyzes it to determine the appropriate message and type to be displayed to the user. 
   * It first checks if the response is valid, and if so, it retrieves the corresponding mail response message based on the messageId from the response. If a matching response is found, it sets the serverMessageType to 'success' or 'error' based on the success property of the mail response, and sets the serverMessage to the messageText from the mail response.
   * @memberof ContactComponent
   * @param response The response object received from the server after sending the mail.
   * @returns A Promise that resolves when the analysis is complete.
   */
  private async analyzeTheEmailResponse(response: MailResponse): Promise<void> {
    if (!response) { return; }

    const mailResponseResult = await this.getMailResonseByMessageId(response.messageId);

    if (mailResponseResult === undefined) { return; }

    this.serverMessageType = mailResponseResult.success ? 'success' : 'error';
    this.serverMessage = mailResponseResult.messageText!;

  }

  /**
   * @description The getMailResonseByMessageId method is a helper method that takes in a messageId and retrieves the corresponding MailResponse object from the mailResponseMessages$ observable. 
   * It first gets the current array of mail response messages from the observable, and then finds the message that matches the provided messageId. If a matching message is found, it returns that MailResponse object; otherwise, 
   * it returns undefined.
   * @memberof ContactComponent
   * @param messageId The ID of the message to be retrieved.
   * @returns A Promise that resolves to the MailResponse object if found, or undefined if not found.
   */
  private async getMailResonseByMessageId(messageId: string): Promise<MailResponse | undefined> {
    const currentResponseArray = await firstValueFrom(this.mailResponseMessages$);
    const currentResponseByMessageId = currentResponseArray.find(responseArrayObject => responseArrayObject.messageId === messageId);
    return currentResponseByMessageId;
  }

  /**
   * @description The resetServerMessageAndType method is a helper method that resets the server message and type after a certain period of time. 
   * It uses the setTimeout function to clear the serverMessage and serverMessageType properties after 2 seconds, allowing the user to see the success or error message for a short duration before it disappears.
   * @memberof ContactComponent
   * @returns void
   */
  private resetServerMessageAndType(): void {
    setTimeout(() => {
      this.serverMessageType = '';
      this.serverMessage = '';
    }, 2000);
  }

  /**
   * @description The resetContactForm method is a helper method that resets the contact form to its initial state after a successful submission. 
   * It takes in the NgForm object representing the contact form and calls the resetForm method to clear all form fields and validation states. Additionally, it resets the privacyCheck to unchecked state.
   * @param contactForm The NgForm object representing the contact form to be reset.
   * @memberof ContactComponent
   * @returns void
   */
  private resetContactForm(contactForm: NgForm): void {
    contactForm.resetForm();
    this.privacyCheck.checked = false;
  }


}
