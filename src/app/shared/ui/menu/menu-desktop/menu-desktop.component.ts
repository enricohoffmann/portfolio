import { Component } from '@angular/core';
import { LanguageToggleComponent } from "../../language-toggle/language-toggle.component";
import { MenuItemComponent } from "../menu-item/menu-item.component";

@Component({
  selector: 'app-menu-desktop',
  standalone: true,
  imports: [LanguageToggleComponent, MenuItemComponent],
  templateUrl: './menu-desktop.component.html',
  styleUrl: './menu-desktop.component.scss'
})
export class MenuDesktopComponent {

}
