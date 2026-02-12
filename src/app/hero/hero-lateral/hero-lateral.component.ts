import { Component } from '@angular/core';
import { LateralLeftComponent } from "./lateral-left/lateral-left.component";
import { LateralRightComponent } from "./lateral-right/lateral-right.component";

@Component({
  selector: 'app-hero-lateral',
  standalone: true,
  imports: [LateralLeftComponent, LateralRightComponent],
  templateUrl: './hero-lateral.component.html',
  styleUrl: './hero-lateral.component.scss'
})
export class HeroLateralComponent {

}
