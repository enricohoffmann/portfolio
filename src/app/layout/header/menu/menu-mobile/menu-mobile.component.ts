import { Component } from '@angular/core';
import { MobileNavFlowService } from '../../../../services/mobileMenu.service';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LanguageService } from '../../../../services/language.service';
import { LinksService } from '../../../../services/links.service';
import { Link } from '../../../../interfaces/link.interface';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { LanguageToggleComponent } from "../../../../ui/language-toggle/language-toggle.component";

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [AsyncPipe, MenuItemComponent, LanguageToggleComponent],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {
  private readonly OPEN_DELAY_MS = 125;
  private readonly MENU_ITEM_CLOSE_DELAY_MS = 500;
  private readonly OVERLAY_CLOSE_DELAY_MS = 150;
  private isClosing = false;

  constructor(
    private mobileNavFlowService: MobileNavFlowService,
    private languageService: LanguageService,
    private linksService: LinksService
  ) { }

  mobileMenueShow$: Observable<boolean> = this.mobileNavFlowService.mobileFlow$.pipe(
    map(flow => flow === 'menuShow' ? true : false)
  );

  mobileMenuLinks$: Observable<Link[]> = this.languageService.selectByLanguage(this.linksService.getHeaderlinksDe(), this.linksService.getHeaderlinksEn());

  ngOnInit() {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
    document.documentElement.classList.add('mobile');
    document.body.classList.add('mobile');

    setTimeout(() => {
      this.mobileNavFlowService.setMobileFlow('menuShow');
    }, this.OPEN_DELAY_MS);

  }


  onMobileMenuOverlayClose(event: PointerEvent): void {
    if (event.target !== event.currentTarget) { return; }
    this.closeMenuFlow();
  }

  onMenuItemClick(): void {
    this.closeMenuFlow(this.MENU_ITEM_CLOSE_DELAY_MS);
  }

  private closeMenuFlow(menuCloseDelayMs = 0): void {
    if (this.mobileNavFlowService.getCurrentMobilNavFlow() !== 'menuShow' || this.isClosing) { return; }
    this.isClosing = true;

    setTimeout(() => {
      this.mobileNavFlowService.setMobileFlow('menuHide');
      this.hideMobileOverlay();
    }, menuCloseDelayMs);
  }

  private hideMobileOverlay(): void {
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('mobile');
      document.documentElement.classList.remove('no-scroll');
      document.documentElement.classList.remove('mobile');
      this.mobileNavFlowService.setMobileFlow('closed');
      this.isClosing = false;
    }, this.OVERLAY_CLOSE_DELAY_MS);
  }

  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    document.documentElement.classList.remove('mobile');
    document.body.classList.remove('mobile');
  }

}
