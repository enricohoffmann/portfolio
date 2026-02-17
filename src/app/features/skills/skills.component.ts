import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { SkillIconComponent } from "../../ui/skill-icon/skill-icon.component";
import { SkillWithTooltipComponent } from "./skill-with-tooltip/skill-with-tooltip.component";
import { TooltipComponent } from "../../ui/tooltip/tooltip.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent, ButtonComponent, SkillIconComponent, SkillWithTooltipComponent, TooltipComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
