import { Component } from '@angular/core';
import { CardComponent } from "../../../ui/card/card.component";
import { ButtonComponent } from "../../../ui/button/button.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
