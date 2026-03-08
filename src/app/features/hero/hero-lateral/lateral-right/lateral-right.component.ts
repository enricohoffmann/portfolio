import { Component } from '@angular/core';
import { ContactIconComponent } from "../../../../ui/contact-icon/contact-icon.component";

interface Link {
  isActive: boolean;
  linkName: string;
  linkTarget: string;
  linkTargetFragment: string | null;
  linkTargetPlace: string;
}

@Component({
  selector: 'app-lateral-right',
  standalone: true,
  imports: [ContactIconComponent],
  templateUrl: './lateral-right.component.html',
  styleUrl: './lateral-right.component.scss'
})
export class LateralRightComponent {
  heroContactLinks: Link[] = [
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
    ]
}
