import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss'
})
export class SkillIconComponent {
  @Input() iconName?: string;
  @Input() textColorChange: boolean = false;
  @Input() skillIconType: 'SkillSet' | 'ProjectSkills' = 'SkillSet'
  @Output() hoverSkillIconEvent = new EventEmitter<boolean>();


  onMouseEnter(){
    if(this.skillIconType !== 'ProjectSkills'){ 
      this.hoverSkillIconEvent.emit(true);
      return;
    }
    
  }

  onMouseLeave(){
    if(this.skillIconType !== 'ProjectSkills'){
      this.hoverSkillIconEvent.emit(false);
      return;
    }
    
  }

}
