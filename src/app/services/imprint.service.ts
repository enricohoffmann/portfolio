import { Injectable } from "@angular/core";
import { PageTextContent } from "../interfaces/pageTextContent.interface";
import { LegalNoticeEn } from "../data/imprint.en.data";
import { LegalNoticeDe } from "../data/imprint.de.data";

@Injectable({ providedIn: 'root' })
export class ImprintService {
    
    private readonly legalNoticeEn: PageTextContent = LegalNoticeEn;
    private readonly legalNoticeDe: PageTextContent = LegalNoticeDe;

    getLegalNoticeEn(): PageTextContent {
        return this.legalNoticeEn;
    }

    getLegalNoticeDe(): PageTextContent{
        return this.legalNoticeDe;
    }
}