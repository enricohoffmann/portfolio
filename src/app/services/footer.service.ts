import { Injectable } from "@angular/core";
import { FooterData } from "../interfaces/footer.interface";
import { Link } from "../interfaces/link.interface";

/**
 * @description The FooterDataService is an Angular service that provides data for the footer component of the application. It contains methods to retrieve footer data and links in both English and German languages. The service is decorated with the @Injectable decorator, which allows it to be injected into other components or services that require access to the footer data.
 * @namespace FooterDataService
 */
@Injectable({ providedIn: 'root' })
export class FooterDataService {

    /**
     * @description The getFooterDataEn method returns an object of type FooterData that contains the developer's name and location in English. This data can be used to populate the footer section of the application when the selected language is English.
     * @returns FooterData An object containing the developer's name and location in English.
     * @memberof FooterDataService
     * @private
     * @readonly
     */
    private readonly footerDataEn: FooterData = {
        footerDeveloper: 'Web Developer',
        footerLocation: 'Tübingen Germany'
    };

    /**
     * @description The getFooterDataEn method returns the footer data in English. It retrieves the data from the private readonly property footerDataEn, which is an object of type FooterData containing the developer's name and location in English. This method can be called by components or services that need to access the footer data in English.
     * @returns FooterData An object containing the developer's name and location in English.
     * @memberof FooterDataService
     */
    getFooterDataEn(): FooterData {
        return this.footerDataEn;
    }

    /**
     * @description The getFooterDataDe method returns an object of type FooterData that contains the developer's name and location in German. This data can be used to populate the footer section of the application when the selected language is German.
     * @returns FooterData An object containing the developer's name and location in German.
     * @memberof FooterDataService
     * @private
     * @readonly
     */
    private readonly footerDataDe: FooterData = {
        footerDeveloper: 'Web-Entwickler',
        footerLocation: 'Tübingen Deutschland'
    };

    /**
     * @description The getFooterDataDe method returns the footer data in German. It retrieves the data from the private readonly property footerDataDe, which is an object of type FooterData containing the developer's name and location in German. This method can be called by components or services that need to access the footer data in German.
     * @returns FooterData An object containing the developer's name and location in German.
     * @memberof FooterDataService
     */
    getFooterDataDe(): FooterData {
        return this.footerDataDe;
    }

    /** 
     * @description The footerLinksEn property is a private readonly array of Link objects that contains the links to be displayed in the footer section of the application when the selected language is English. Each Link object includes properties such as isActive, linkName, linkTarget, linkTargetFragment, and linkTargetPlace, which define the characteristics of each link.
     * @private
     * @readonly
     * @memberof FooterDataService
     * @returns Link[] An array of Link objects representing the footer links in English.
     */
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

    /**
     * @description The getFooterLinksEn method returns the footer links in English. It retrieves the data from the private readonly property footerLinksEn, which is an array of Link objects representing the links to be displayed in the footer section of the application when the selected language is English. This method can be called by components or services that need to access the footer links in English.
     * @returns Link[] An array of Link objects representing the footer links in English.
     * @memberof FooterDataService
     */
    getFooterLinksEn(): Link[]{
        return this.footerLinksEn;
    }

    /**
     * @description The footerLinksDe property is a private readonly array of Link objects that contains the links to be displayed in the footer section of the application when the selected language is German. Each Link object includes properties such as isActive, linkName, linkTarget, linkTargetFragment, and linkTargetPlace, which define the characteristics of each link.
     * @private
     * @readonly
     * @memberof FooterDataService
     * @returns Link[] An array of Link objects representing the footer links in German.
     */
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

    /**
     * @description The getFooterLinksDe method returns the footer links in German. It retrieves the data from the private readonly property footerLinksDe, which is an array of Link objects representing the links to be displayed in the footer section of the application when the selected language is German. This method can be called by components or services that need to access the footer links in German.
     * @returns Link[] An array of Link objects representing the footer links in German.
     * @memberof FooterDataService
     */
    getFooterLinksDe(): Link[]{
        return this.footerLinksDe;
    }
}