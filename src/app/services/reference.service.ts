import { Injectable } from "@angular/core";
import { ReferenceEntry } from "../interfaces/reference.interface";

@Injectable({ providedIn: 'root' })
export class ReferenceDateService {
    private readonly referencesArrayEn: ReferenceEntry[] = [
        {
            referenceComment: 'I work in a structured and solution-oriented way, focusing on clean and maintainable code.',
            referenceWriter: "Statement - four",
        },
        {
            referenceComment: "I stay calm when facing complex challenges and find efficient solutions through analytical thinking.",
            referenceWriter: "Statement - five",
        },
        {
            referenceComment: "Continuous learning is part of my mindset – I constantly improve my skills and stay up to date with modern technologies.",
            referenceWriter: "Statement - one",
        },
        {
            referenceComment: "I enjoy not only solving problems, but truly understanding them and improving them in a sustainable and meaningful way.",
            referenceWriter: "Statement - two",
        },
        {
            referenceComment: 'It’s important to me to create solutions that are not only functional, but also clear and easy to understand.',
            referenceWriter: "Statement - three",
        }
        
    ];

    getReferneceArrayEn(): ReferenceEntry[]{
        return this.referencesArrayEn;
    }

    private readonly referencesArrayDe: ReferenceEntry[] = [
        {
            referenceComment: 'Ich arbeite strukturiert und lösungsorientiert und lege großen Wert auf sauberen, wartbaren Code.',
            referenceWriter: 'Aussage - vier'
        },
        {
            referenceComment: 'Ich bleibe auch bei komplexen Herausforderungen ruhig und finde effiziente Lösungen durch analytisches Denken.',
            referenceWriter: 'Aussage - fünf'
        },
        {
            referenceComment: 'Kontinuierliches Lernen ist für mich selbstverständlich – ich entwickle meine Fähigkeiten stetig weiter und bleibe technisch auf dem neuesten Stand.',
            referenceWriter: 'Aussage - eins'
        },
        {
            referenceComment: 'Mir macht es Spaß, Probleme nicht nur zu lösen, sondern sie wirklich zu verstehen und nachhaltig zu verbessern.',
            referenceWriter: 'Aussage - zwei'
        },
        {
            referenceComment: 'Mir ist es wichtig, Lösungen nicht nur funktional, sondern auch verständlich und nachvollziehbar zu gestalten.',
            referenceWriter: 'Aussage - drei'
        }
    ];

    getReferneceArrayDe(){
        return this.referencesArrayDe;
    }

}