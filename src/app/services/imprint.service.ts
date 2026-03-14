import { Injectable } from "@angular/core";
import { PageTextContent } from "../interfaces/pageTextContent.interface";

@Injectable({ providedIn: 'root' })
export class ImprintService {
    private readonly legalNoticeEn: PageTextContent = {
        pageTitle: 'Legal Notice',
        sections: [
            {
                title: 'Imprint',
                paragraphs: [
                    { runs: [ { text: '', style: 'dot' }, { text: 'Enrico Hoffmann' }, ], },
                    { runs: [ { text: '', style: 'dot' }, { text: 'Neckar-Alb-Str. 9/1' } ] },
                    { runs: [ { text: '', style: 'dot' }, { text: '72127 Kusterdingen' } ] }
                ]
            },
            {
                title: 'Exploring the Board',
                paragraphs: [{ runs: [{ text: 'Email: ' }, { text: 'enrico@enrico-hoffmann.de' }] }]
            },
            {
                title: 'Acceptance of terms',
                paragraphs: [{
                    runs:[
                        { text: 'By accessing and using ' }, 
                        { text: 'Portfolio ', style: 'accent' },
                        { text: ` (Product), you acknowledge and agree to the following terms and conditions, 
                            and any policies, guidelines, or amendments thereto that may be presented to you from time to time. 
                            We, the listed students, may update or change the terms and conditions from time to time without notice.`
                        }
                    ]}]
            }
        ]
    }

    getLegalNoticeEn() {
        return this.legalNoticeEn;
    }
}