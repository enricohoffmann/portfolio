import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-portfolio-menu-image',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-menu-image.component.html',
  styleUrl: './portfolio-menu-image.component.scss'
})
/**
 * @description The PortfolioMenuImageComponent is an Angular component that represents an image associated with a menu item in the portfolio section of the application. It takes in several input properties, 
 * including the image path, the index of the current menu item, and flags indicating whether it is the first or last menu item. The component also tracks whether a foreign menu item is currently hovered. 
 * The ngOnChanges lifecycle hook is implemented to detect changes to the currentHoveredMenuItemId input property and update the isforeignMenuitemHoverd flag accordingly. This component is responsible for 
 * displaying the appropriate image based on the current state of the menu items and their hover status.
 * @namespace PortfolioMenuImageComponent
 */
export class PortfolioMenuImageComponent implements OnChanges {
  @Input() imagePath?: string;
  @Input() currentMenuItemIndex?: string;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() currentHoveredMenuItemId: string = "";
  isforeignMenuitemHoverd: boolean = false;

  /**
   * @description The ngOnChanges method is a lifecycle hook in Angular that is called whenever any data-bound input properties of a component change. In this implementation, the method checks for changes to the currentHoveredMenuItemId input property. If the previous value of currentHoveredMenuItemId was an empty string and the current value matches the currentMenuItemIndex, it sets the isforeignMenuitemHoverd flag to true, indicating that a foreign menu item is currently hovered. Otherwise, it sets the flag to false. This logic allows the component to track whether a foreign menu item is being hovered based on changes to the currentHoveredMenuItemId input property.
   * @returns void
   * @memberof PortfolioMenuImageComponent
   * @param changes The changes object of type SimpleChanges that contains the current and previous values of the input properties.
   */
  ngOnChanges(changes: SimpleChanges): void {

    const currentChange = changes['currentHoveredMenuItemId'];

    if(currentChange.previousValue == "" && currentChange.currentValue == this.currentMenuItemIndex){
      this.isforeignMenuitemHoverd = true;
    }else{
      this.isforeignMenuitemHoverd = false;
    }
  }

}
