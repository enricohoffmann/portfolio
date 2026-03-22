import { Injectable } from "@angular/core";
import { ProjectEntry, ProjectSectionData } from "../interfaces/project.interface";

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
      imageUrl: './assets/img/portfolio_join.png',
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
      imageUrl: './assets/img/el-pollo-loco.png',
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
      imageUrl: './assets/img/pokedex.png',
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

    if(currentIndex === -1){ return this.projectsData[0]; }

    const nextIndex = (currentIndex + 1) % this.projectsData.length;
    return this.projectsData[nextIndex];
  }

  private readonly projectSectionDataEn: ProjectSectionData = {
    projectSectionEyebrow: 'Portfolio',
    projectSectionHeadline: 'Featured Projects',
    projectSectionDescription: 'Explore a selection of my work here - Interact with projects to see my skills in action.'
  };

  getProjectSectionDataEn(): ProjectSectionData{
    return this.projectSectionDataEn;
  }

  private readonly projectSectionDataDe: ProjectSectionData = {
    projectSectionEyebrow: 'Portfolio',
    projectSectionHeadline: 'Ausgewählte Projekte',
    projectSectionDescription: 'Entdecke hier eine Auswahl meiner Projekte – interagiere mit ihnen, um meine Fähigkeiten in Aktion zu sehen.'
  };

  getProjectSectionDataDe(): ProjectSectionData{
    return this.projectSectionDataDe;
  }

}