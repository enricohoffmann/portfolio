import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-menu-item.component.html',
  styleUrl: './portfolio-menu-item.component.scss'
})
export class PortfolioMenuItemComponent {
  @Input() projectTitle: string = "";
  @Input() projectSkills: string[] = [];
  @Input() menuItemIndex: string = "";
  @Output() hoverPortfolioMenuEvent = new EventEmitter<string>();
  showMenuIcon: boolean = false;
  currentHoverdMenuItem: string = "";
  

  onMouseEnter(){
    this.showMenuIcon = true;

    if(this.currentHoverdMenuItem !== this.menuItemIndex){
      this.currentHoverdMenuItem = this.menuItemIndex;
      this.hoverPortfolioMenuEvent.emit(this.currentHoverdMenuItem);
    }

  }

  onMouseLeave(){ 
    this.showMenuIcon = false;
    this.currentHoverdMenuItem = "";
    this.hoverPortfolioMenuEvent.emit(this.currentHoverdMenuItem);
  }


}
