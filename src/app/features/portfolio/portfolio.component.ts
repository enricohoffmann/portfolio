import { Component, EventEmitter, Output } from '@angular/core';
import { PortfolioMenuComponent } from "./portfolio-menu/portfolio-menu.component";
import { ProjectEntry } from '../../interfaces/projectEntry.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioMenuComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  portfolioPojects: ProjectEntry[] = [
    {
      id: 'join',
      projectTitle: 'Join',
      skills: ['JavaScript','HTML','CSS','Firebase'],
      imageKey: 'portfolio_join'
    },
    {
      id: 'el-pollo-loco',
      projectTitle: 'El Pollo Loco',
      skills: ['HTML','CSS','JavaScript'],
      imageKey: 'portfolio_el-pollo-loco'
    },
    {
      id: 'pokedex',
      projectTitle: 'Pokedex',
      skills: ['HTML','CSS','JavaScript'],
      imageKey: 'portfolio_pokedex'
    }

  ]


  @Output() projectSelectRelay = new EventEmitter<ProjectEntry>();

  onProjectRelay(projectEntry: ProjectEntry): void{
    this.projectSelectRelay.emit(projectEntry);
  }

}
