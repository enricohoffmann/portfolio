import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-portfolio-menu-image',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-menu-image.component.html',
  styleUrl: './portfolio-menu-image.component.scss'
})
export class PortfolioMenuImageComponent implements OnChanges {
  @Input() imageName?: string;
  @Input() currentMenuItemIndex?: string;
  @Input() isFirst: boolean = false;
  @Input() isLast: boolean = false;
  @Input() currentHoveredMenuItemId: string = "";
  isforeignMenuitemHoverd: boolean = false;


  ngOnChanges(changes: SimpleChanges): void {

    const currentChange = changes['currentHoveredMenuItemId'];

    if(currentChange.previousValue == "" && currentChange.currentValue == this.currentMenuItemIndex){
      this.isforeignMenuitemHoverd = true;
    }else{
      this.isforeignMenuitemHoverd = false;
    }
  }

}
