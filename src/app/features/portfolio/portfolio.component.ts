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
      id: '01',
      projectTitle: 'Join',
      skills: [
        { iconText: 'JavaScript', iconName: 'jsIcon' },
        { iconText: 'HTML', iconName: 'htmlIcon' },
        { iconText: 'CSS', iconName: 'cssIcon' },
        { iconText: 'Firebase', iconName: 'fireBaseIcon' }
      ],
      imageKey: 'portfolio_join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
    },
    {
      id: '02',
      projectTitle: 'El Pollo Loco',
      skills: [
        { iconText: 'JavaScript', iconName: 'jsIcon' },
        { iconText: 'HTML', iconName: 'htmlIcon' },
        { iconText: 'CSS', iconName: 'cssIcon' }
      ],
      imageKey: 'portfolio_el-pollo-loco',
      description: ''
    },
    {
      id: '03',
      projectTitle: 'Pokedex',
      skills: [
        { iconText: 'JavaScript', iconName: 'jsIcon' },
        { iconText: 'HTML', iconName: 'htmlIcon' },
        { iconText: 'CSS', iconName: 'cssIcon' }
      ],
      imageKey: 'portfolio_pokedex',
      description: ''
    }

  ]


  @Output() projectSelectRelay = new EventEmitter<ProjectEntry>();

  onProjectRelay(projectEntry: ProjectEntry): void{
    this.projectSelectRelay.emit(projectEntry);
  }

}
