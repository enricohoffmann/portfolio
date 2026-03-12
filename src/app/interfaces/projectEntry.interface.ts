import { Skill } from "./skill.interface"

export interface ProjectEntry{
    id: string,
    projectTitle: string,
    skills: Skill[],
    imageKey: string,
    description: string,
    githubUrl: string,
    projectUrl: string
}