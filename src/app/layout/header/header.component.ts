import { Component } from '@angular/core';
import { MenuDesktopComponent } from "../header/menu/menu-desktop/menu-desktop.component";
import { LogoComponent } from '../../ui/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenuDesktopComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
