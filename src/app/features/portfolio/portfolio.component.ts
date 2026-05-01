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

/**
 * @description The PortfolioComponent is responsible for displaying the portfolio section of the application. It retrieves project data from the PortfolioDataService and manages the selection of projects through event relaying. 
 * The component also handles language-specific data for the portfolio section using the LanguageService.
 * @namespace PortfolioComponent
 * @memberof App.Features.Portfolio
 * @property {ProjectEntry[]} portfolioPojects - An array of project entries to be displayed in the portfolio.
 */
export class PortfolioComponent {

  portfolioPojects: ProjectEntry[] = [];
   
  @Output() selectPortfolioProjectByIdRelay = new EventEmitter<string>();

  constructor(private portfolioData: PortfolioDataService, private languageService: LanguageService){
    this.portfolioPojects = this.portfolioData.getProjects();
  }
  
  /**
   * @description Observable that provides the portfolio section data based on the selected language.
   * @type {Observable<ProjectSectionData>}
   * @returns An observable that emits the portfolio section data corresponding to the current language selection.
   * @memberof PortfolioComponent
   */
  portfolioSectionData$: Observable<ProjectSectionData> = this.languageService.selectByLanguage(this.portfolioData.getProjectSectionDataDe(), this.portfolioData.getProjectSectionDataEn());

  /**
   * @description Relays the selected project ID to the parent component or other interested components through the selectPortfolioProjectByIdRelay event emitter.
   * This method is called when a project is selected from the portfolio menu, allowing other components to react to the selection and display relevant project details.
   * @param projectId 
   * @memberof PortfolioComponent
   * @returns void
   */
  onProjectIdRelaying(projectId: string): void{
    this.selectPortfolioProjectByIdRelay.emit(projectId);
  }

}
