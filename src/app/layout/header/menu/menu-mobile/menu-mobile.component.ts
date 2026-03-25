import { Component } from '@angular/core';
import { MobileNavFlowService } from '../../../../services/mobileMenu.service';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {



  constructor(private mobileNavFlowService: MobileNavFlowService) { }

  mobileMenueShow$: Observable<boolean> = this.mobileNavFlowService.mobileFlow$.pipe(
    map(flow => flow === 'menuShow' ? true : false)
  );

  ngOnInit() {
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');

    setTimeout(() => {
      this.mobileNavFlowService.setMobileFlow('menuShow');
      console.log('Menu');
    }, 1000);

  }


  onMobileMenuOverlayClose(event: PointerEvent): void {
    event.stopPropagation();
    if (this.mobileNavFlowService.getCurrentMobilNavFlow() !== 'menuShow') { return; }
    this.hideMobileMenu();
    this.hideMobileOverlay();
  }

  hideMobileMenu():void {
    this.mobileNavFlowService.setMobileFlow('menuHide');
  }

  hideMobileOverlay():void {
    setTimeout(() => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
      this.mobileNavFlowService.setMobileFlow('closed');
    }, 1000);
  }

  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }

}
