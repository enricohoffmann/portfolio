import { Injectable } from "@angular/core";
import { FooterData } from "../interfaces/footer.interface";
import { Link } from "../interfaces/link.interface";

@Injectable({ providedIn: 'root' })
export class FooterDataService {
    private readonly footerDataEn: FooterData = {
        footerDeveloper: 'Web Developer',
        footerLocation: 'Tübingen Germany'
    };

    getFooterDataEn(): FooterData {
        return this.footerDataEn;
    }

    private readonly footerDataDe: FooterData = {
        footerDeveloper: 'Web-Entwickler',
        footerLocation: 'Tübingen Deutschland'
    };

    getFooterDataDe(): FooterData {
        return this.footerDataDe;
    }

    private readonly footerLinksEn: Link[] = [
        {
            isActive: false,
            linkName: 'Github',
            linkTarget: 'https://github.com/enricohoffmann',
            linkTargetFragment: null,
            linkTargetPlace: '_blank'
        },
        {
            isActive: false,
            linkName: 'Email',
            linkTarget: 'mailto:enrico@enrico-hoffmann.de',
            linkTargetFragment: null,
            linkTargetPlace: '_self'
        },
        {
            isActive: false,
            linkName: 'Legal Notice',
            linkTarget: '/legal-notice',
            linkTargetFragment: 'top',
            linkTargetPlace: '_self'
        },
        {
            isActive: false,
            linkName: 'Privacy Policy',
            linkTarget: '/privacy-policy',
            linkTargetFragment: 'top',
            linkTargetPlace: '_self'
        }
    ];

    getFooterLinksEn(): Link[]{
        return this.footerLinksEn;
    }

    private readonly footerLinksDe: Link[] = [
        {
            isActive: false,
            linkName: 'Github',
            linkTarget: 'https://github.com/enricohoffmann',
            linkTargetFragment: null,
            linkTargetPlace: '_blank'
        },
        {
            isActive: false,
            linkName: 'Email',
            linkTarget: 'mailto:enrico@enrico-hoffmann.de',
            linkTargetFragment: null,
            linkTargetPlace: '_self'
        },
        {
            isActive: false,
            linkName: 'Impressum',
            linkTarget: '/legal-notice',
            linkTargetFragment: 'top',
            linkTargetPlace: '_self'
        },
        {
            isActive: false,
            linkName: 'Datenschutz',
            linkTarget: '/privacy-policy',
            linkTargetFragment: 'top',
            linkTargetPlace: '_self'
        }
    ];

    getFooterLinksDe(): Link[]{
        return this.footerLinksDe;
    }
}