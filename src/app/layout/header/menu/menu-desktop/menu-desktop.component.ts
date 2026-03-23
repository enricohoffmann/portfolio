import { Component } from '@angular/core';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { LanguageToggleComponent } from '../../../../ui/language-toggle/language-toggle.component';
import { LanguageService } from '../../../../services/language.service';
import { LinksService } from '../../../../services/links.service';
import { Link } from '../../../../interfaces/link.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [LanguageToggleComponent, MenuItemComponent, AsyncPipe],
  templateUrl: './menu-desktop.component.html',
  styleUrl: './menu-desktop.component.scss'
})
export class MenuDesktopComponent {
  constructor(private languageService: LanguageService, private linksService: LinksService){}

  headerLinks$: Observable<Link[]> = this.languageService.selectByLanguage(this.linksService.getHeaderlinksDe(), this.linksService.getHeaderlinksEn());

}
