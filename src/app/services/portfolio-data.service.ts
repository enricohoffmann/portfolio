import { Injectable } from "@angular/core";
import { ProjectEntry, ProjectSectionData } from "../interfaces/project.interface";

@Injectable({providedIn: 'root'})
/**
 * @namespace PortfolioDataService
 * Portfolio Data Service
 * Provides data for the portfolio section, including projects and project section information.
 */
export class PortfolioDataService {

    constructor(){}

    /**
     * @description An array of ProjectEntry objects representing the projects in the portfolio.
     * @memberof PortfolioDataService
     * @private
     * @readonly
     * @returns An array of ProjectEntry objects.
     */
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
      projectUrl: 'https://join.enrico-hoffmann.de/',
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
      projectUrl: 'https://polo-loco.enrico-hoffmann.de',
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
      projectUrl: 'https://pokedex.enrico-hoffmann.de',
      descriptionDe: 'Interaktive Pokédex-Anwendung mit externer API. Durchsuche Pokémon, entdecke Details und erhalte Informationen zu Typen, Fähigkeiten und Werten.',
      descriptionEn: 'Interactive Pokédex application using a public API. Browse, search and explore Pokémon with detailed information such as types, abilities and stats.'
    }

  ];

  /**
   * @description Returns all projects.
   * @memberof PortfolioDataService
   * @returns An array of ProjectEntry objects.
   */
  getProjects(): ProjectEntry[]{
    return this.projectsData;
  }

  /**
   * @description Returns a project by its ID.
   * @memberof PortfolioDataService
   * @param id The ID of the project.
   * @returns The ProjectEntry object or undefined if not found.
   */
  getProjectById(id: string): ProjectEntry | undefined{
    return this.projectsData.find(project => project.id === id);;
  }

  /**
   * @description Returns the next project in the list.
   * @param currentId The ID of the current project.
   * @memberof PortfolioDataService
   * @returns The next ProjectEntry object.
   */
  getNextProject(currentId: string): ProjectEntry{
    const currentIndex = this.projectsData.findIndex(project => project.id === currentId);

    if(currentIndex === -1){ return this.projectsData[0]; }

    const nextIndex = (currentIndex + 1) % this.projectsData.length;
    return this.projectsData[nextIndex];
  }

  /**
    * @description An object containing the project section data for English language.
    * @memberof PortfolioDataService     
    * @private
    * @readonly
    * @returns The ProjectSectionData object for English language.
   */
  private readonly projectSectionDataEn: ProjectSectionData = {
    projectSectionEyebrow: 'Portfolio',
    projectSectionHeadline: 'Featured Projects',
    projectSectionDescription: 'Explore a selection of my work here - Interact with projects to see my skills in action.'
  };

  /**
   * @description Returns the English project section data.
   * @memberof PortfolioDataService
   * @returns The ProjectSectionData object for English language.
   */

  getProjectSectionDataEn(): ProjectSectionData{
    return this.projectSectionDataEn;
  }

  /**
   * @description Returns the German project section data.
   * @memberof PortfolioDataService
   * @private
   * @readonly
   * @returns The ProjectSectionData object for German language.
   */
  private readonly projectSectionDataDe: ProjectSectionData = {
    projectSectionEyebrow: 'Portfolio',
    projectSectionHeadline: 'Ausgewählte Projekte',
    projectSectionDescription: 'Entdecke hier eine Auswahl meiner Projekte – interagiere mit ihnen, um meine Fähigkeiten in Aktion zu sehen.'
  };

  /**
   * @description Returns the German project section data.
   * @memberof PortfolioDataService
   * @returns The ProjectSectionData object for German language.
   */
  getProjectSectionDataDe(): ProjectSectionData{
    return this.projectSectionDataDe;
  }

}