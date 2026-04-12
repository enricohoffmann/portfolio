import { Injectable } from "@angular/core";
import { ContactData, ContactSectionData } from "../interfaces/contact.interface";
import { MailResponse } from "../interfaces/mailResponse.interface";


/**
 * @description This service provides data for the contact section of the application, including form fields, section content, and response messages for both English and German languages. It allows components to retrieve localized content and validation messages for the contact form, ensuring a consistent user experience across different languages.
 * The service includes methods to get contact form fields, section data, privacy acceptance error messages, and mail response messages for both English and German. This centralized approach to managing contact-related data helps maintain clean and organized code, making it easier to update content and validation rules in the future.
 * @memberof ContactDataService
 */
@Injectable({ providedIn: 'root' })
export class ContactDataService {

    /**
     * @description This service provides data for the contact section of the application, including form fields, section content, and response messages for both English and German languages. It allows components to retrieve localized content and validation messages for the contact form, ensuring a consistent user experience across different languages.
     * The service includes methods to get contact form fields, section data, privacy acceptance error messages, and mail response messages for both English and German. This centralized approach to managing contact-related data helps maintain clean and organized code, making it easier to update content and validation rules in the future.
     * @memberof ContactDataService
     * @private
     * @readonly
     * @returns {ContactData[]} An array of contact form field data for English language.
     */
    private readonly contactFormFieldsEn: ContactData[] = [
        {
            title: 'What\'s your name?',
            contactValue: '',
            contactField: 'name',
            minLength: 4,
            placeholterText: 'Your name goes here',
            errors: [
                {
                    contactErrorKey: 'required',
                    contactErrorMessagePartOne: 'Oops! it seems your name is missing'
                },
                {
                    contactErrorKey: 'minlength',
                    contactErrorMessagePartOne: 'The name is too short. (minimum',
                    contactErrorMessagePartTwo: 'characters)'
                }
            ]
        },
        {
            title: 'What\'s your email?',
            contactValue: '',
            contactField: 'email',
            minLength: 4,
            placeholterText: 'youremail@email.com',
            errors: [
                {
                    contactErrorKey: 'required',
                    contactErrorMessagePartOne: 'Hoppla! your email is required'
                },
                {
                    contactErrorKey: 'minlength',
                    contactErrorMessagePartOne: 'The email is too short. (minimum',
                    contactErrorMessagePartTwo: 'characters)'
                },
                {
                    contactErrorKey: 'pattern',
                    contactErrorMessagePartOne: 'The email address is invalid.'
                }
            ]
        },
        {
            title: 'How can I help you?',
            contactValue: '',
            contactField: 'message',
            minLength: 4,
            placeholterText: 'Hello Enrico, I am interested in...',
            errors: [
                {
                    contactErrorKey: 'required',
                    contactErrorMessagePartOne: 'What do you need to develop?'
                },
                {
                    contactErrorKey: 'minlength',
                    contactErrorMessagePartOne: 'The message is too short. (minimum',
                    contactErrorMessagePartTwo: 'characters)'
                }
            ]
        }

    ];

    /**
     * @description This method returns an array of contact form field data for the English language. Each object in the array represents a form field with its title, value, type, minimum length requirement, placeholder text, and associated validation error messages. This data is used to dynamically generate the contact form in the user interface and provide appropriate validation feedback to users.
     * @memberof ContactDataService
     * @returns {ContactData[]} An array of contact form field data for English language.
     */
    getContactFormFieldsEn(): ContactData[] {
        return this.contactFormFieldsEn;
    }

    /**
     * @description This method returns an array of contact form field data for the German language. Each object in the array represents a form field with its title, value, type, minimum length requirement, placeholder text, and associated validation error messages. This data is used to dynamically generate the contact form in the user interface and provide appropriate validation feedback to users in German.
     * @memberof ContactDataService
     * @readonly
     * @private
     * @returns {ContactData[]} An array of contact form field data for German language.
     */
    private readonly contactFormFieldsDe: ContactData[] = [
        {
            title: 'Wie heißt du?',
            contactValue: '',
            contactField: 'name',
            minLength: 4,
            placeholterText: 'Dein Name',
            errors: [
                {
                    contactErrorKey: 'required',
                    contactErrorMessagePartOne: 'Ups! Bitte gib deinen Namen ein.'
                },
                {
                    contactErrorKey: 'minlength',
                    contactErrorMessagePartOne: 'Der Name ist zu kurz. (mindestens',
                    contactErrorMessagePartTwo: 'Zeichen)'
                }
            ]
        },
        {
            title: 'Wie lautet deine E-Mail?',
            contactValue: '',
            contactField: 'email',
            minLength: 4,
            placeholterText: 'deinname@email.de',
            errors: [
                {
                    contactErrorKey: 'required',
                    contactErrorMessagePartOne: 'Bitte gib eine gültige E-Mail-Adresse ein.'
                },
                {
                    contactErrorKey: 'minlength',
                    contactErrorMessagePartOne: 'Die Adresse ist zu kurz. (mindestens',
                    contactErrorMessagePartTwo: 'Zeichen)'
                },
                {
                    contactErrorKey: 'pattern',
                    contactErrorMessagePartOne: 'Die E-Mail-Adresse ist ungültig.'
                }
            ]
        },
        {
            title: 'Wie kann ich dir helfen?',
            contactValue: '',
            contactField: 'message',
            minLength: 4,
            placeholterText: 'Hallo Enrico, ich interessiere mich für...',
            errors: [
                {
                    contactErrorKey: 'required',
                    contactErrorMessagePartOne: 'Bitte beschreibe kurz dein Anliegen.'
                },
                {
                    contactErrorKey: 'minlength',
                    contactErrorMessagePartOne: 'Deine Nachricht ist zu kurz. (mindestens',
                    contactErrorMessagePartTwo: 'Zeichen)'
                }
            ]
        }
    ];

    /**
     * @description This method returns an array of contact form field data for the German language. Each object in the array represents a form field with its title, value, type, minimum length requirement, placeholder text, and associated validation error messages. This data is used to dynamically generate the contact form in the user interface and provide appropriate validation feedback to users in German.
     * @memberof ContactDataService
     * @returns {ContactData[]} An array of contact form field data for German language.
     */
    getContactFormFieldsDe(): ContactData[] {
        return this.contactFormFieldsDe;
    }

    /**
     * @description This service provides data for the contact section of the application, including form fields, section content, and response messages for both English and German languages. It allows components to retrieve localized content and validation messages for the contact form, ensuring a consistent user experience across different languages.
     * The service includes methods to get contact form fields, section data, privacy acceptance error messages, and mail response messages for both English and German. This centralized approach to managing contact-related data helps maintain clean and organized code, making it easier to update content and validation rules in the future.
     * @memberof ContactDataService
     * @private
     * @readonly
     * @returns {ContactSectionData} An object containing localized content for the contact section in English language.
     */
    private readonly contactSectionDataEn: ContactSectionData = {
        contactSectionEyebrow: 'Contact me',
        contactSectionHeadline: 'Let’s work together',
        contactSectionSubtile: 'Got a problem to solve?',
        contactSectionDescription: `Do you have an idea or a project in mind? I’d be happy to help you develop the right solutions and bring your vision to life.`,
        contactSectionEndTextPartOne: 'Need a Frontend developer? ',
        contactSectionEndTextPartTwo: 'Let’s talk!',
        contactSectionPrivacyPartOne: `I've read the `,
        contactSectionPrivacyLinkName: 'privacy policy',
        contactSectionPrivacyPartTwo: ` and agree to the processing of my data as outlined.`,
        contactSectionFormSubmitBtnText: 'Say Hello'
    };

    /**
     * @description This method returns an object containing localized content for the contact section in English language. The object includes properties for the section's eyebrow, headline, subtitle, description, end text parts, privacy policy text, and form submit button text. This data is used to populate the contact section of the user interface with appropriate content for English-speaking users.
     * @memberof ContactDataService
     * @returns {ContactSectionData} An object containing localized content for the contact section in English language.
     */
    getContactSectionDataEn(): ContactSectionData {
        return this.contactSectionDataEn;
    }

    /**
     * @description This method returns an object containing localized content for the contact section in German language. The object includes properties for the section's eyebrow, headline, subtitle, description, end text parts, privacy policy text, and form submit button text. This data is used to populate the contact section of the user interface with appropriate content for German-speaking users.
     * @memberof ContactDataService
     * @readonly
     * @private
     * @returns {ContactSectionData} An object containing localized content for the contact section in German language.
     */
    private readonly contactSectionDataDe: ContactSectionData = {
        contactSectionEyebrow: 'Kontakt',
        contactSectionHeadline: 'Lass uns zusammenarbeiten',
        contactSectionSubtile: 'Du hast ein Problem zu lösen?',
        contactSectionDescription: `Du hast eine Idee oder ein Projekt im Kopf? Ich unterstütze dich gerne dabei, passende Lösungen zu entwickeln und deine Anforderungen umzusetzen.`,
        contactSectionEndTextPartOne: 'Du suchst einen Frontend-Entwickler? ',
        contactSectionEndTextPartTwo: 'Lass uns sprechen!',
        contactSectionPrivacyPartOne: 'Ich habe die ',
        contactSectionPrivacyLinkName: 'Datenschutzerklärung',
        contactSectionPrivacyPartTwo: ` gelesen und stimme der Verarbeitung meiner Daten gemäß den darin enthaltenen Bestimmungen zu.`,
        contactSectionFormSubmitBtnText: 'Schreib mir'
    };

    /**
     * @description This method returns an object containing localized content for the contact section in German language. The object includes properties for the section's eyebrow, headline, subtitle, description, end text parts, privacy policy text, and form submit button text. This data is used to populate the contact section of the user interface with appropriate content for German-speaking users.
     * @memberof ContactDataService
     * @readonly
     * @private
     * @returns {ContactSectionData} An object containing localized content for the contact section in German language.
     */
    getContactSectionDataDe(): ContactSectionData {
        return this.contactSectionDataDe;
    }

    /**
     * @description This method returns the localized error message for accepting the privacy policy in English language.
     * @memberof ContactDataService
     * @readonly
     * @private
     * @returns {string} The localized error message for accepting the privacy policy in English language.
     */

    private readonly contactPrivacyAcceptErrorEn: string = 'Please accept the privacy policy.';

    /**
     * @description This method returns the localized error message for accepting the privacy policy in English language.
     * @memberof ContactDataService
     * @returns {string} The localized error message for accepting the privacy policy in English language.
     */
    getContactPrivacyAcceptErrorEn(): string {
        return this.contactPrivacyAcceptErrorEn;
    }

    /**
     * @description This method returns the localized error message for accepting the privacy policy in German language.
     * @memberof ContactDataService
     * @readonly
     * @private
     * @returns {string} The localized error message for accepting the privacy policy in German language.
     */
    private readonly contactPrivacyAcceptErrorDe: string = 'Bitte stimmen Sie der Datenschutzerklärung zu.';

    /**
     * @description This method returns the localized error message for accepting the privacy policy in German language.
     * @memberof ContactDataService
     * @returns {string} The localized error message for accepting the privacy policy in German language.
     */
    getContactPrivacyAcceptErrorDe(): string {
        return this.contactPrivacyAcceptErrorDe;
    }

    /**
     * @description This method returns an array of mail response messages for the German language. Each object in the array represents a possible response from the mail service, including success status, message ID, and localized message text. This data is used to provide appropriate feedback to users after they submit the contact form, ensuring they understand the outcome of their submission in German.
     * @memberof ContactDataService
     * @readonly
     * @private
     * @returns {MailResponse[]} An array of mail response messages for the German language.
     */
    private readonly mailResponsesDe: MailResponse[] = [
        { success: false, messageId: '1', messageText: 'Methode nicht erlaubt.' },
        { success: false, messageId: '2', messageText: 'Ungueltige JSON-Daten.' },
        { success: false, messageId: '3', messageText: 'Bitte alle Felder ausfuellen.' },
        { success: false, messageId: '4', messageText: 'Ungültige E-Mail-Adresse.' },
        { success: false, messageId: '5', messageText: 'Ungültige Header-Daten.' },
        { success: false, messageId: '6', messageText: 'Zu viele Anfragen. Bitte kurz warten.' },
        { success: false, messageId: '7', messageText: 'E-Mail konnte nicht versendet werden.' },
        { success: true, messageId: '8', messageText: ' E-Mail wurde erfolgreich versendet.' },
    ];

    /**
     * @description This method returns an array of mail response messages for the German language. Each object in the array represents a possible response from the mail service, including success status, message ID, and localized message text. This data is used to provide appropriate feedback to users after they submit the contact form, ensuring they understand the outcome of their submission in German.
     * @memberof ContactDataService
     * @returns {MailResponse[]} An array of mail response messages for the German language.
     */
    getContactMailResponseMessagesDe(): MailResponse[] {
        return this.mailResponsesDe;
    }

    /**
     * @description This method returns an array of mail response messages for the English language. Each object in the array represents a possible response from the mail service, including success status, message ID, and localized message text. This data is used to provide appropriate feedback to users after they submit the contact form, ensuring they understand the outcome of their submission in English.
     * @memberof ContactDataService
     * @readonly
     * @private
     * @returns {MailResponse[]} An array of mail response messages for the English language.
     */
    private readonly mailResponsesEn: MailResponse[] = [
        { success: false, messageId: '1', messageText: 'Method not allowed.' },
        { success: false, messageId: '2', messageText: 'Invalid JSON data.' },
        { success: false, messageId: '3', messageText: 'Please fill in all fields.' },
        { success: false, messageId: '4', messageText: 'Invalid email address.' },
        { success: false, messageId: '5', messageText: 'Invalid header data.' },
        { success: false, messageId: '6', messageText: 'Too many requests. Please wait a moment.' },
        { success: false, messageId: '7', messageText: 'Email could not be sent.' },
        { success: true, messageId: '8', messageText: 'Email was sent successfully.' },
    ];

    /**
     * @description This method returns an array of mail response messages for the English language. Each object in the array represents a possible response from the mail service, including success status, message ID, and localized message text. This data is used to provide appropriate feedback to users after they submit the contact form, ensuring they understand the outcome of their submission in English.
     * @memberof ContactDataService
     * @returns {MailResponse[]} An array of mail response messages for the English language.
     */
    getContactMailResponseMessagesEn(): MailResponse[] {
        return this.mailResponsesEn;
    }
}