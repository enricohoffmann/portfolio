import { Injectable } from "@angular/core";
import { SkillCard } from "../interfaces/skillCard.interface";

@Injectable({providedIn: 'root'})
export class SkillCardService {
    private readonly skillcardDateEn: SkillCard = {
        skillCardEyebrow: 'Technologies',
        skillCardTitle: 'Skill Set',
        skillCardBodyContent: `I work with modern frontend technologies and focus on building clean, structured and maintainable solutions. 
            I enjoy solving real-world challenges efficiently through well thought-out code. At the same time, I’m committed to continuously improving my skills and learning 
            new technologies to stay up to date with modern web development.`,
        skillCardSubTitlePartOne: 'You need ',
        skillCardSubTitlePartTwo: 'another skill?',
        skillCardSubText: `Looking for a specific skill?
            Feel free to reach out – I’m always open to expanding my knowledge.`,
        skillCardButtonText: 'Let’s talk'
    };

    getSkillCardDataEn(): SkillCard {
        return this.skillcardDateEn;
    }

    private readonly skillcardDateDe: SkillCard = {
        skillCardEyebrow: 'Technologien',
        skillCardTitle: 'Fähigkeiten',
        skillCardBodyContent: `Ich arbeite mit modernen Frontend-Technologien und habe einen klaren Fokus auf saubere, strukturierte und wartbare Lösungen. 
            Dabei lege ich großen Wert darauf, bestehende Herausforderungen effizient mit durchdachtem Code zu lösen.
            Gleichzeitig ist es mir wichtig, mich kontinuierlich weiterzuentwickeln und neue Technologien kennenzulernen, um stets auf dem aktuellen Stand der Webentwicklung zu bleiben.`,
        skillCardSubTitlePartOne: 'Du suchst eine ',
        skillCardSubTitlePartTwo: 'bestimmte Fähigkeit?',
        skillCardSubText: `Melde dich gerne bei mir – ich freue mich darauf, mein Wissen weiter auszubauen.`,
        skillCardButtonText: 'Lass uns sprechen'
    };

    getSkillCardDataDe(): SkillCard {
        return this.skillcardDateDe;
    }
}