import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '../../../../interfaces/skill.interface';

@Component({
  selector: 'app-portfolio-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-menu-item.component.html',
  styleUrl: './portfolio-menu-item.component.scss'
})
/**
 * @description The PortfolioMenuItemComponent is an Angular component that represents a single menu item in the portfolio section of the application. 
 * It takes in several input properties, including the project title, an array of project skills, and the index of the menu item. The component also emits an event when the menu item is hovered, 
 * allowing parent components to react to hover events and update the state accordingly. The component manages the display of a menu icon based on hover state and tracks the currently hovered menu item 
 * index to ensure that the correct menu item is highlighted when hovered.
 * @namespace PortfolioMenuItemComponent
 */
export class PortfolioMenuItemComponent {
  @Input() projectTitle: string = "";
  @Input() projectSkills: Skill[]= [];
  @Input() menuItemIndex: string = "";
  @Output() hoverPortfolioMenuEvent = new EventEmitter<string>();
  showMenuIcon: boolean = false;
  currentHoverdMenuItem: string = "";

  /**
   * @description The onMouseEnter method is an event handler that is called when the mouse enters the area of the portfolio menu item. It sets the showMenuIcon flag to true, indicating that the menu icon should be displayed. It also checks if the current hovered menu item index is different from the menuItemIndex of this component. If they are different, it updates the currentHoverdMenuItem to the menuItemIndex of this component and emits an event using the hoverPortfolioMenuEvent emitter, passing the currentHoverdMenuItem as a parameter. This allows parent components to react to the hover event and update their state accordingly.
   * @returns void
   * @memberof PortfolioMenuItemComponent
   */
  onMouseEnter(): void{
    this.showMenuIcon = true;

    if(this.currentHoverdMenuItem !== this.menuItemIndex){
      this.currentHoverdMenuItem = this.menuItemIndex;
      this.hoverPortfolioMenuEvent.emit(this.currentHoverdMenuItem);
    }

  }

  /**
   * @description The onMouseLeave method is an event handler that is called when the mouse leaves the area of the portfolio menu item. It sets the showMenuIcon flag to false, indicating that the menu icon should be hidden. It also resets the currentHoverdMenuItem to an empty string and emits an event using the hoverPortfolioMenuEvent emitter, passing the currentHoverdMenuItem (which is now an empty string) as a parameter. This allows parent components to react to the mouse leave event and update their state accordingly, such as hiding any hover effects or resetting the highlighted menu item.
   * @returns void
   * @memberof PortfolioMenuItemComponent
   */
  onMouseLeave(): void{ 
    this.showMenuIcon = false;
    this.currentHoverdMenuItem = "";
    this.hoverPortfolioMenuEvent.emit(this.currentHoverdMenuItem);
  }


}
