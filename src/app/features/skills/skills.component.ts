import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";
import { ButtonComponent } from "../../ui/button/button.component";
import { SkillIconComponent } from "../../ui/skill-icon/skill-icon.component";
import { SkillWithTooltipComponent } from "./skill-with-tooltip/skill-with-tooltip.component";
import { TooltipComponent } from "../../ui/tooltip/tooltip.component";
import { Skill } from '../../interfaces/skill.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { SkillCardService } from '../../services/skillCard.service';
import { SkillCard } from '../../interfaces/skillCard.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CardComponent, ButtonComponent, SkillIconComponent, SkillWithTooltipComponent, TooltipComponent, AsyncPipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  isSkillIconHovering: boolean = false;
  skillItems: Skill[] = [];

  constructor(private languageService: LanguageService, private skillCardService: SkillCardService){
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

  skillCardData$: Observable<SkillCard> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? this.skillCardService.getSkillCardDataDe() : this.skillCardService.getSkillCardDataEn())
  );
}
