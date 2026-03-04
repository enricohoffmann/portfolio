
type ContactField = 'name' | 'email' | 'message';

export interface ContactData {
  title: string;
  contactValue: string;
  contactField: ContactField;
  placeholterText: string;
  errorText: string;
}