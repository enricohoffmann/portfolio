import { Component } from '@angular/core';
import { CardComponent } from "../../../ui/card/card.component";
import { ButtonComponent } from "../../../ui/button/button.component";
import { SkillIconComponent } from "../../../ui/skill-icon/skill-icon.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent, ButtonComponent, SkillIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
