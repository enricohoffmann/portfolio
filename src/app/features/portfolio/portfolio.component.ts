import { Component, EventEmitter, Output } from '@angular/core';
import { PortfolioMenuComponent } from "./portfolio-menu/portfolio-menu.component";
import { ProjectEntry } from '../../interfaces/projectEntry.interface';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioMenuComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolioPojects: ProjectEntry[] = [];
   
  @Output() selectPortfolioProjectByIdRelay = new EventEmitter<string>();

  constructor(private portfolioData: PortfolioDataService){
    this.portfolioPojects = this.portfolioData.getProjects();
  }

  onProjectIdRelaying(projectId: string): void{
    this.selectPortfolioProjectByIdRelay.emit(projectId);
  }

}
