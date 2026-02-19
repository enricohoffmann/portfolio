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
  @Output() hoverSkillIconEvent = new EventEmitter<boolean>();


  onMouseEnter(){
    this.hoverSkillIconEvent.emit(true);
  }

  onMouseLeave(){
    this.hoverSkillIconEvent.emit(false);
  }

}
