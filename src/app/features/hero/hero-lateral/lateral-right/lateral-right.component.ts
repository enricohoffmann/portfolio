import { Component } from '@angular/core';
import { ContactIconComponent } from "../../../../ui/contact-icon/contact-icon.component";
import { LinksService } from '../../../../services/links.service';
import { Link } from '../../../../interfaces/link.interface';
@Component({
  selector: 'app-lateral-right',
  standalone: true,
  imports: [ContactIconComponent],
  templateUrl: './lateral-right.component.html',
  styleUrl: './lateral-right.component.scss'
})
export class LateralRightComponent {

  constructor(private linkService: LinksService){}

  heroContactLinks: Link[] = this.linkService.getHeroContactLinks();
      
}
