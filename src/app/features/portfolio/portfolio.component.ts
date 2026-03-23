import { Component, EventEmitter, Output } from '@angular/core';
import { PortfolioMenuComponent } from "./portfolio-menu/portfolio-menu.component";
import { PortfolioDataService } from '../../services/portfolio-data.service';
import {ProjectEntry, ProjectSectionData} from '../../interfaces/project.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LanguageService } from '../../services/language.service';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioMenuComponent, AsyncPipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolioPojects: ProjectEntry[] = [];
   
  @Output() selectPortfolioProjectByIdRelay = new EventEmitter<string>();

  constructor(private portfolioData: PortfolioDataService, private languageService: LanguageService){
    this.portfolioPojects = this.portfolioData.getProjects();
  }
  
  portfolioSectionData$: Observable<ProjectSectionData> = this.languageService.selectByLanguage(this.portfolioData.getProjectSectionDataDe(), this.portfolioData.getProjectSectionDataEn());

  onProjectIdRelaying(projectId: string): void{
    this.selectPortfolioProjectByIdRelay.emit(projectId);
  }

}
