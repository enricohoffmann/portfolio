import { Component } from '@angular/core';
import { ContactIconComponent } from "../../../../ui/contact-icon/contact-icon.component";
import { LinksService } from '../../../../services/links.service';
import { Link } from '../../../../interfaces/link.interface';
import { DisplayService } from '../../../../services/display.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-lateral-right',
  standalone: true,
  imports: [ContactIconComponent, AsyncPipe],
  templateUrl: './lateral-right.component.html',
  styleUrl: './lateral-right.component.scss'
})
export class LateralRightComponent {

  constructor(private displayService: DisplayService, private linkService: LinksService){}

  heroContactLinks$: Observable<Link[]> = this.displayService.selectViewByDisplayMode(
    this.linkService.getHeroContactLinksDesktop(), this.linkService.getHeroContactLinksMobile());

  showMailLink$: Observable<boolean> = this.displayService.selectViewByDisplayMode(true, false);
      
}
