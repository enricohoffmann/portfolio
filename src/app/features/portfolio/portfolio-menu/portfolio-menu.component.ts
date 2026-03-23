import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioMenuItemComponent } from "./portfolio-menu-item/portfolio-menu-item.component";
import { PortfolioMenuImageComponent } from "./portfolio-menu-image/portfolio-menu-image.component";
import { ProjectEntry } from '../../../interfaces/project.interface';


@Component({
  selector: 'app-portfolio-menu',
  standalone: true,
  imports: [PortfolioMenuItemComponent, PortfolioMenuImageComponent, CommonModule],
  templateUrl: './portfolio-menu.component.html',
  styleUrl: './portfolio-menu.component.scss'
})
export class PortfolioMenuComponent {
  @Input() portFolioProjects?: ProjectEntry[];
  isHoverd: boolean = false;
  portfolioMenuItemHoverId: string = "";
  @Output() selectedProjectSender = new EventEmitter<string>();

  constructor(){}

  receiveMenuItemHoverId(id: string): void {
    if(this.portfolioMenuItemHoverId !== id){
      this.portfolioMenuItemHoverId = id;
    }
  }

  selectPortfolioProjectById(projektId: string): void{
    this.selectedProjectSender.emit(projektId);
  }


}
