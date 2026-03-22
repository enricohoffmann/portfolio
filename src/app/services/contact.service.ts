import { Injectable } from "@angular/core";
import { ContactData, ContactSectionData } from "../interfaces/contact.interface";


@Injectable({ providedIn: 'root' })
export class ContactDataService {
    private readonly contactFormFieldsEn: ContactData[] = [
        {
            title: 'What\'s your name?',
            contactValue: '',
            contactField: 'name',
            placeholterText: 'Your name goes here',
            errorText: 'Oops! it seems your name is missing'
        },
        {
            title: 'What\'s your email?',
            contactValue: '',
            contactField: 'email',
            placeholterText: 'youremail@email.com',
            errorText: 'Hoppla! your email is required'
        },
        {
            title: 'How can I help you?',
            contactValue: '',
            contactField: 'message',
            placeholterText: 'Hello Lukas, I am interested in...',
            errorText: 'What do you need to develop?'
        }
    ];


    getContactFormFieldsEn(): ContactData[] {
        return this.contactFormFieldsEn;
    }

    private readonly contactFormFieldsDe: ContactData[] = [
        {
            title: 'Wie heißt du?',
            contactValue: '',
            contactField: 'name',
            placeholterText: 'Dein Name',
            errorText: 'Ups! Bitte gib deinen Namen ein.'
        },
        {
            title: 'Wie lautet deine E-Mail?',
            contactValue: '',
            contactField: 'email',
            placeholterText: 'deinname@email.de',
            errorText: 'Bitte gib eine gültige E-Mail-Adresse ein.'
        },
        {
            title: 'Wie kann ich dir helfen?',
            contactValue: '',
            contactField: 'message',
            placeholterText: 'Hallo Enrico, ich interessiere mich für...',
            errorText: 'Bitte beschreibe kurz dein Anliegen.'
        }
    ];

    getContactFormFieldsDe(): ContactData[] {
        return this.contactFormFieldsDe;
    }

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

    getContactSectionDataEn(): ContactSectionData {
        return this.contactSectionDataEn;
    }

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

    getContactSectionDataDe(): ContactSectionData {
        return this.contactSectionDataDe;
    }

}