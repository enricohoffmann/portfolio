import { Component } from '@angular/core';
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { LanguageToggleComponent } from '../../../../ui/language-toggle/language-toggle.component';


@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [LanguageToggleComponent, MenuItemComponent],
  templateUrl: './menu-desktop.component.html',
  styleUrl: './menu-desktop.component.scss'
})
export class MenuDesktopComponent {

}
