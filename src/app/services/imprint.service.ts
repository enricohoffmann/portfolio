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
                    { runs: [ 
                        { text: '', style: 'dot' }, { text: 'Enrico Hoffmann' }, {text: '', style: 'lineBreak'},
                        { text: '', style: 'dot' }, { text: 'Neckar-Alb-Str. 9/1' }, {text: '', style: 'lineBreak'},
                        { text: '', style: 'dot' }, { text: '72127 Kusterdingen' }
                    ]},
                ]
            },
            {
                title: 'Exploring the Board',
                paragraphs: [{ runs: [{ text: 'Email: ' }, {text: 'enrico@enrico-hoffmann.de', style: 'link', link: {
                    linkTarget: 'mailto:enrico@enrico-hoffmann.de'
                }}] }]
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
            },
            {
                title: 'Scope and ownership of the product',
                paragraphs: [
                    {
                        runs:[
                            {text: 'Portfolio ', style: 'accent'},
                            {text: 'has been developed as part of a student group project in a web development bootcamp at the '},
                            {text: 'Developer Akademie GmbH', style: 'accent'},
                            {text: '. '},
                            {text: `It has an educational purpose and is not intended for extensive personal & business usage. 
                                As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.`},

                        ]
                    },
                    {
                        runs: [
                            {text: 'The design of '},
                            {text: 'Portfolio ', style: 'accent'},
                            {text: 'is owned by the '},
                            {text: 'Developer Akademie GmbH', style: 'accent'},
                            {text: '. '},
                            {text: 'Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.'}
                        ]

                    }
                ]
            },
            {
                title: 'Proprietary rights',
                paragraphs: [
                    {
                        runs: [
                            {text: 'Aside from the design owned by '},
                            {text: 'Developer Akademie GmbH', style: 'accent'},
                            {text: ', '},
                            {text: 'we, the listed students, retain all proprietary rights in '},
                            {text: 'Portfolio', style: 'accent'},
                            {text: ', '},
                            {text: 'including any associated copyrighted material, trademarks, and other proprietary information.'}
                        ]
                    }
                ]
            },
            {
                title: 'Use of the product',
                paragraphs: [
                    {
                        runs: [
                            {text: 'Portfolio ', style: 'accent'},
                            {text: `is intended to be used for lawful purposes only, 
                                in accordance with all applicable laws and regulations. 
                                Any use of Portfolio for illegal activities, or to harass, harm, threaten, 
                                or intimidate another person, is strictly prohibited. 
                                You are solely responsible for your interactions with other users of `},
                            {text: 'Portfolio', style: 'accent'},
                            {text: '.'}
                        ]
                    }
                ]
            },
            {
                title: 'Disclaimer of warranties and limitation of liability',
                paragraphs: [
                    {
                        runs: [
                            {text: 'Portfolio ', style: 'accent'},
                            {text: `is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, 
                                fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the `},
                            {text: 'Developer Akademie', style: 'accent'},
                            {text: ', '},
                            {text: `be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, 
                                damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, 
                                arising out of or in connection with the use or performance of `},
                            {text: 'Portfolio', style: 'accent'},
                            {text: '.'}
                        ]
                    }
                ]
            },
            {
                title: 'Indemnity',
                paragraphs: [
                    {
                        runs: [
                            {text: 'You agree to indemnify, defend and hold harmless us, the listed students, the '},
                            {text: 'Developer Akademie', style: 'accent'},
                            {text: ', '},
                            {text: `nd our affiliates, partners, officers, directors, agents, and employees, 
                                from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of `},
                            {text: 'Portfolio ', style: 'accent'},
                            {text: 'and/or your breach of this Legal Notice.'}
                        ]
                    },
                    {
                        runs: [
                            {text: 'For any questions or notices, please contact us at '},
                            {text: 'enrico@enrico-hoffmann.de', style: 'link', link: {
                                linkTarget: 'mailto:enrico@enrico-hoffmann.de'
                            }}
                        ]
                    },
                    {
                        runs: [
                            {text: 'Date: March 15, 2026'}
                        ]
                    }
                ]
            }
        ]
    }

    getLegalNoticeEn() {
        return this.legalNoticeEn;
    }
}