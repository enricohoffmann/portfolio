
/**
 * This file defines the interfaces for the contact form data and errors.
 * It includes the ContactData interface for the form data, the ContactSectionData interface for the section content,
 * and the ContactError interface for error messages related to the contact form.
 */
type ContactField = 'name' | 'email' | 'message';

export interface ContactData {
  title: string,
  minLength: number,
  contactValue: string,
  contactField: ContactField,
  placeholterText: string
  errors: ContactError[]
}

export interface ContactSectionData {
  contactSectionEyebrow?: string,
  contactSectionHeadline?: string,
  contactSectionSubtile?: string,
  contactSectionDescription?: string,
  contactSectionEndTextPartOne?: string,
  contactSectionEndTextPartTwo?: string,
  contactSectionPrivacyPartOne?: string,
  contactSectionPrivacyLinkName?: string,
  contactSectionPrivacyPartTwo?: string,
  contactSectionFormSubmitBtnText?: string
}

export interface ContactError {
  contactErrorKey: string,
  contactErrorMessagePartOne: string
  contactErrorMessagePartTwo?: string
}