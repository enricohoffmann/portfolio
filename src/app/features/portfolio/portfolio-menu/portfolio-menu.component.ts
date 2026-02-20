import { AfterViewInit, Component, Input } from '@angular/core';
import { PortfolioMenuItemComponent } from "./portfolio-menu-item/portfolio-menu-item.component";

@Component({
  selector: 'app-portfolio-menu',
  standalone: true,
  imports: [PortfolioMenuItemComponent],
  templateUrl: './portfolio-menu.component.html',
  styleUrl: './portfolio-menu.component.scss'
})
export class PortfolioMenuComponent implements AfterViewInit {
  @Input() portFolioProjects?: {};
  projectEntries: [string, string[]][] = [];
  isHoverd: boolean = false;

  constructor(){}

  ngAfterViewInit(): void {
    if (this.portFolioProjects) {
      this.projectEntries = Object.entries(this.portFolioProjects) as [string, string[]][];
    }
  }
}
