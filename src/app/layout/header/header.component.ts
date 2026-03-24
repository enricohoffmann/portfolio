import { Component } from '@angular/core';
import { MenuDesktopComponent } from "../header/menu/menu-desktop/menu-desktop.component";
import { LogoComponent } from '../../ui/logo/logo.component';
import { RouterLink } from "@angular/router";
import { Observable } from 'rxjs';
import { DisplayService } from '../../services/display.service';
import { AsyncPipe } from '@angular/common';
import { MenuMobileComponent } from "./menu/menu-mobile/menu-mobile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenuDesktopComponent, RouterLink, AsyncPipe, MenuMobileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private displayService: DisplayService){}

  isDesktop$: Observable<boolean> = this.displayService.selectViewByDisplayMode(true, false);
  isMenuButtonActive: boolean = false;

  onPointerDown(): void {
    if(this.isMenuButtonActive){return;}
    this.isMenuButtonActive = true;
  }

  onPointerLeave(): void {
    if(!this.isMenuButtonActive) {return;}
    this.isMenuButtonActive = false;
  }
}
