import { Component } from '@angular/core';
import { LogoComponent } from "../ui/logo/logo.component";
import { MenuDesktopComponent } from "../ui/menu/menu-desktop/menu-desktop.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenuDesktopComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
