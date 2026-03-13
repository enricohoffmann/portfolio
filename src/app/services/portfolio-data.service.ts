import { Injectable } from "@angular/core";
import { ProjectEntry } from "../interfaces/projectEntry.interface";

@Injectable({providedIn: 'root'})
export class PortfolioDataService {
    private readonly projectsData: ProjectEntry[] = [
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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      githubUrl: 'https://github.com/enricohoffmann/Join-1316',
      projectUrl: ''
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
      description: 'Jump-and-run browser game built with JavaScript. Help Pepe collect coins and salsa bottles while avoiding enemies and defeating the final boss.',
      githubUrl: 'https://github.com/enricohoffmann/el-pollo-loco',
      projectUrl: ''
    },
    {
      id: '03',
      projectTitle: 'Pokedex',
      skills: [
        { iconText: 'JavaScript', iconName: 'jsIcon' },
        { iconText: 'HTML', iconName: 'htmlIcon' },
        { iconText: 'CSS', iconName: 'cssIcon' },
        { iconText: 'Rest-API', iconName: 'restApi'}
      ],
      imageKey: 'portfolio_pokedex',
      description: 'Interactive Pokédex application using a public API. Browse, search and explore Pokémon with detailed information such as types, abilities and stats.',
      githubUrl: 'https://github.com/enricohoffmann/pokedex',
      projectUrl: ''
    }

  ];

  getProjects(): ProjectEntry[]{
    return this.projectsData;
  }

  getProjectById(id: string): ProjectEntry | undefined{
    return this.projectsData.find(project => project.id === id);
  }

  getNextProject(currentId: string): ProjectEntry{
    const currentIndex = this.projectsData.findIndex(project => project.id === currentId);

    if(currentIndex === -1){
        return this.projectsData[0];
    }

    const nextIndex = (currentIndex + 1) % this.projectsData.length;
    return this.projectsData[nextIndex];
  }

}