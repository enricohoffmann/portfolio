import { Component } from '@angular/core';
import { LateralLeftComponent } from "./lateral-left/lateral-left.component";
import { LateralRightComponent } from "./lateral-right/lateral-right.component";
import { DisplayService } from '../../../services/display.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-hero-lateral',
  standalone: true,
  imports: [LateralLeftComponent, LateralRightComponent, AsyncPipe],
  templateUrl: './hero-lateral.component.html',
  styleUrl: './hero-lateral.component.scss'
})
export class HeroLateralComponent {
  constructor(private displayService: DisplayService){}

  isInMobileMode$: Observable<boolean> = this.displayService.selectViewByDisplayMode(false, true);
}
