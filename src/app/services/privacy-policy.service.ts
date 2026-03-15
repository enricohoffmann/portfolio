import { Injectable } from "@angular/core";
import { PageTextContent } from "../interfaces/pageTextContent.interface";
import { PrivacyPolicyDataEn } from "../data/privacy-policy.en.data";
import { PrivacyPolicyDataDe } from "../data/privacy-policy.de.data";

@Injectable({ providedIn: 'root' })
export class PrivacyPolicyService {
    
    private readonly privacyPolicyEn: PageTextContent = PrivacyPolicyDataEn;
    private readonly privacyPolicyDe: PageTextContent = PrivacyPolicyDataDe;

    getPrivacyPolicyEn() {
        return this.privacyPolicyEn;
    }

    getPrivacyPolicyDe() {
        return this.privacyPolicyDe;
    }

}