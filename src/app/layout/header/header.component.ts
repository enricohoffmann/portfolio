import { Component } from '@angular/core';
import { MenuDesktopComponent } from "../header/menu/menu-desktop/menu-desktop.component";
import { LogoComponent } from '../../ui/logo/logo.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenuDesktopComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
