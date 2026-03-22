import { Skill } from "./skill.interface"

export class ProjectSectionData {
    projectSectionEyebrow?: string;
    projectSectionHeadline?: string;
    projectSectionDescription?: string;
}

export interface ProjectEntry{
    id: string,
    projectTitle: string,
    skills: Skill[],
    imageUrl: string,
    descriptionDe: string,
    descriptionEn: string,
    githubUrl: string,
    projectUrl: string,
}
