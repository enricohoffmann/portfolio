import { Component, Input } from '@angular/core';

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
  showMenuIcon: boolean = false;

  onMouseEnter(){
    this.showMenuIcon = true;
  }

  onMouseLeave(){ 
    this.showMenuIcon = false;
  }


}
