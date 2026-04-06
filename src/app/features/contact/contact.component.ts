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
import { HttpClient } from '@angular/common/http';
import { MailResponse } from '../../interfaces/mailResponse.interface';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactItemComponent, FormsModule, ButtonComponent, CheckBoxComponent, AsyncPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
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
    }

  }

  private createPayload(contactForm: NgForm): Object {
    return {
      name: contactForm.value.name,
      email: contactForm.value.email,
      message: contactForm.value.message
    }
  }

  private getTimeForSendingPause(): number {
    const now = Date.now();
    if (now - this.lastSubmitAt < this.clientCooldownMs) {
      const secondsLeft = Math.ceil((this.clientCooldownMs - (now - this.lastSubmitAt)) / 1000);
      return secondsLeft;
    } else {
      return 0;
    }
  }

  private setMessageForSendingPause(secondsLeft: number): void {
    this.serverMessageType = 'error';
    this.serverMessage = this.languageService.getCurrentLanguage() === 'DE'
      ? `Bitte warte noch ${secondsLeft} Sekunden, bevor du erneut sendest.`
      : `Please wait ${secondsLeft} seconds before sending again.`
  }

  private checkWhetherSendingIsCurrentlyPossible(): boolean {
    const timeLeft = this.getTimeForSendingPause();
    if (timeLeft === 0) {
      return true;
    } else {
      this.setMessageForSendingPause(timeLeft);
      return false;
    }

  }

  private setReadyToSend(): void {
    this.isSending = true;
    this.serverMessage = '';
    this.serverMessageType = '';
  }


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

  private resetContactForm(contactForm: NgForm): void {
    contactForm.resetForm();
    this.privacyCheck.checked = false;
  }


  private async analyzeTheEmailResponse(response: MailResponse): Promise<void> {
    if (!response) { return; }

    const mailResponseResult = await this.getMailResonseByMessageId(response.messageId);

    if (mailResponseResult === undefined) { return; }

    this.serverMessageType = mailResponseResult.success ? 'success' : 'error';
    this.serverMessage = mailResponseResult.messageText!;

  }

  private async getMailResonseByMessageId(messageId: string): Promise<MailResponse | undefined> {
    const currentResponseArray = await firstValueFrom(this.mailResponseMessages$);
    const currentResponseByMessageId = currentResponseArray.find(responseArrayObject => responseArrayObject.messageId === messageId);
    return currentResponseByMessageId;
  }


}
