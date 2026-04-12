import { Injectable } from "@angular/core";
import { Link } from "../interfaces/link.interface";

@Injectable({providedIn: 'root'})
export class LinksService {
    private readonly headerLinksEn: Link[] = [
        { linkName: 'About me', linkTarget: '/', linkTargetFragment: 'about' },
        { linkName: 'Skills', linkTarget: '/', linkTargetFragment: 'skills' },
        { linkName: 'Projects', linkTarget: '/', linkTargetFragment: 'portfolio' }
    ];

    getHeaderlinksEn(){
        return this.headerLinksEn;
    }

    private readonly headerLinksDe: Link[] = [
        { linkName: 'Über mich', linkTarget: '/', linkTargetFragment: 'about'},
        { linkName: 'Fähigkeiten', linkTarget: '/', linkTargetFragment: 'skills'},
        { linkName: 'Projekte', linkTarget: '/', linkTargetFragment: 'portfolio'}
    ];

    getHeaderlinksDe(){
        return this.headerLinksDe;
    }

    private readonly heroButtonLinksEn: Link[] = [
        { linkName: 'Check my work', linkTarget: '/', linkTargetFragment: 'portfolio' },
        { linkName: 'Contact me', linkTarget: '/', linkTargetFragment: 'contact'}
    ];

    getHeroButtonLinksEn(){
        return this.heroButtonLinksEn;
    }

    private readonly heroButtonLinksDe: Link[] = [
        { linkName: 'Meine Projekte', linkTarget: '/', linkTargetFragment: 'portfolio' },
        { linkName: 'Kontakt', linkTarget: '/', linkTargetFragment: 'contact'}
    ];

    getHeroButtonLinksDe(){
        return this.heroButtonLinksDe;
    }

    private readonly heroContactLinksDesktop: Link[] = [
      {
        isActive: false,
        linkName: 'github',
        linkTarget: 'https://github.com/enricohoffmann',
        linkTargetFragment: null,
        linkTargetPlace: '_blank'
      }
    ];

    getHeroContactLinksDesktop(): Link[] {
        return this.heroContactLinksDesktop;
    }

    private readonly heroContactLinksMobile: Link[] = [
      {
        isActive: false,
        linkName: 'mail',
        linkTarget: 'mailTo:enrico@enrico-hoffmann.de',
        linkTargetFragment: null,
        linkTargetPlace: '_self'
      },
      {
        isActive: false,
        linkName: 'github',
        linkTarget: 'https://github.com/enricohoffmann',
        linkTargetFragment: null,
        linkTargetPlace: '_blank'
      },
      {
        isActive: false,
        linkName: 'linkedin',
        linkTarget: '#',
        linkTargetFragment: null,
        linkTargetPlace: '_blank'
      }
    ];

    getHeroContactLinksMobile(): Link[]{
        return this.heroContactLinksMobile;
    }
}