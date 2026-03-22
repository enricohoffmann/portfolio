
type ContactField = 'name' | 'email' | 'message';

export interface ContactData {
  title: string,
  contactValue: string,
  contactField: ContactField,
  placeholterText: string
  errorText: string
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