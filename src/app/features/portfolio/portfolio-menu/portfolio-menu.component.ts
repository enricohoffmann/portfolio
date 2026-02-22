import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioMenuItemComponent } from "./portfolio-menu-item/portfolio-menu-item.component";
import { PortfolioMenuImageComponent } from "./portfolio-menu-image/portfolio-menu-image.component";


@Component({
  selector: 'app-portfolio-menu',
  standalone: true,
  imports: [PortfolioMenuItemComponent, PortfolioMenuImageComponent, CommonModule],
  templateUrl: './portfolio-menu.component.html',
  styleUrl: './portfolio-menu.component.scss'
})
export class PortfolioMenuComponent {
  @Input() portFolioProjects?: {};
  projectEntries: [string, [string[], string]][] = [];
  isHoverd: boolean = false;
  portfolioMenuItemHoverId: string = "";

  constructor(){}

  ngOnInit(){
    if (this.portFolioProjects) {
      this.projectEntries = Object.entries(this.portFolioProjects) as [string, [string[], string]][];
    }
  }

  receiveMenuItemHoverId(id: string): void {
    if(this.portfolioMenuItemHoverId !== id){
      this.portfolioMenuItemHoverId = id;
    }
  }

}
