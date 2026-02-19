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

  isSkillIconHovering: boolean = false;
  skillItems: { iconName: string; iconText: string }[] = [];

  constructor(){
    this.skillItems = [
      { iconName: 'htmlIcon', iconText: 'HTML' },
      { iconName: 'cssIcon', iconText: 'CSS' },
      { iconName: 'jsIcon', iconText: 'JavaScript' },
      { iconName: 'materialIcon', iconText: 'Material Design' },     
      { iconName: 'typeScriptIcon', iconText: 'TypeScript' },
      { iconName: 'angularIcon', iconText: 'Angular' },
      { iconName: 'fireBaseIcon', iconText: 'Firebase' },
      { iconName: 'gitIcon', iconText: 'Git' },
      { iconName: 'restApiIcon', iconText: 'REST-API' },
      { iconName: 'scrumIcon', iconText: 'Scrum' }
    ]
  }


  receiveHoverFromSkillIcon(isHovering: boolean): void {
    this.isSkillIconHovering = isHovering;
  }
}
