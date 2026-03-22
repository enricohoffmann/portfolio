import { Injectable } from "@angular/core";
import { ProjectEntry, ProjectSectionData } from "../interfaces/project.interface";
import { LanguageService } from "./language.service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PortfolioDataService {

    constructor(private languageService: LanguageService){}

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
      githubUrl: 'https://github.com/enricohoffmann/Join-1316',
      projectUrl: '',
      descriptionDe: 'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben per Drag & Drop, weise Benutzer zu und strukturiere Inhalte in Kategorien.',
      descriptionEn: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
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
      githubUrl: 'https://github.com/enricohoffmann/el-pollo-loco',
      projectUrl: '',
      descriptionDe: 'Jump-and-Run-Browsergame mit JavaScript. Sammle Münzen und Salsa-Flaschen, weiche Gegnern aus und besiege den Endgegner.',
      descriptionEn: 'Jump-and-run browser game built with JavaScript. Help Pepe collect coins and salsa bottles while avoiding enemies and defeating the final boss.'
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
      githubUrl: 'https://github.com/enricohoffmann/pokedex',
      projectUrl: '',
      descriptionDe: 'Interaktive Pokédex-Anwendung mit externer API. Durchsuche Pokémon, entdecke Details und erhalte Informationen zu Typen, Fähigkeiten und Werten.',
      descriptionEn: 'Interactive Pokédex application using a public API. Browse, search and explore Pokémon with detailed information such as types, abilities and stats.'
    }

  ];

  getProjects(): ProjectEntry[]{
    return this.projectsData;
  }

  getProjectById(id: string): ProjectEntry | undefined{
    return this.projectsData.find(project => project.id === id);;
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