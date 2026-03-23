import { Component } from '@angular/core';
import { MenuDesktopComponent } from "../header/menu/menu-desktop/menu-desktop.component";
import { LogoComponent } from '../../ui/logo/logo.component';
import { RouterLink } from "@angular/router";
import { Observable } from 'rxjs';
import { DisplayService } from '../../services/display.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenuDesktopComponent, RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private displayService: DisplayService){}

  isDesktop$: Observable<boolean> = this.displayService.selectViewByDisplayMode(true, false);
}
