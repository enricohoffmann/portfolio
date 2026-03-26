import { Component } from '@angular/core';
import { MenuDesktopComponent } from "../header/menu/menu-desktop/menu-desktop.component";
import { LogoComponent } from '../../ui/logo/logo.component';
import { RouterLink } from "@angular/router";
import { Observable, map } from 'rxjs';
import { DisplayService } from '../../services/display.service';
import { AsyncPipe } from '@angular/common';
import { MobileNavFlowService } from '../../services/mobileMenu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, MenuDesktopComponent, RouterLink, AsyncPipe,  AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private displayService: DisplayService, private mobileMenuService: MobileNavFlowService){}

  isDesktop$: Observable<boolean> = this.displayService.selectViewByDisplayMode(true, false);
  
  isMenuButtonActive$: Observable<boolean> = this.mobileMenuService.mobileFlow$.pipe(
    map(flow => flow === 'overlay' ? true : flow === 'menuShow' ? true : false)
  );



  onPointerDown(): void {
    this.mobileMenuService.setMobileFlow('overlay');
  }


}
