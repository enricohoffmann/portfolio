import { Skill } from "./skill.interface"

export interface ProjectEntry{
    id: string,
    projectTitle: string,
    skills: Skill[],
    imageUrl: string,
    description: string,
    githubUrl: string,
    projectUrl: string
}