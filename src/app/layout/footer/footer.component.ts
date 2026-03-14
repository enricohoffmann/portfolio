import { Component } from '@angular/core';
import { LogoComponent } from "../../ui/logo/logo.component";
import { Link } from '../../interfaces/link.interface';
import { DotLinkComponent } from '../../ui/dot-link/dot-link.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, DotLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks: Link[] = [
    {
      isActive: false,
      linkName: 'Github',
      linkTarget: 'https://github.com/enricohoffmann',
      linkTargetFragment: null,
      linkTargetPlace: '_blank'
    },
    {
      isActive: false,
      linkName: 'LinkedIn',
      linkTarget: '#',
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
      linkTargetFragment: 'null',
      linkTargetPlace: '_self'
    }
  ]
}
