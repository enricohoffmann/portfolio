import { Injectable } from "@angular/core";
import { AboutMe } from "../interfaces/aboutMe.interface";

@Injectable({providedIn: 'root'})
export class AboutMeService{
    private readonly aboutMeEn: AboutMe = {
        aboutMeEyeBrow: 'Who I Am',
        aboutMeTitle: 'About Me',
        aboutMeDescription: `Hi, I’m Enrico. I’ve been working in IT for over 10 years and have been focusing on software development for several years. 
            What excites me most is solving everyday challenges with small scripts or applications in an efficient way.
            I’m fascinated by how much you can achieve with relatively little effort. It motivates me to keep learning and continuously improve my solutions.`,
        aboutMeEntrys: [
            {
                entryIconName: 'location_on',
                entryMessage: 'I’m based near Tübingen and open to remote work as well as new professional opportunities.'
            },
            {
                entryIconName: 'cognition',
                entryMessage: 'I enjoy learning new technologies and continuously improving my skills to build better solutions.'
            },
            {
                entryIconName: 'new_releases',
                entryMessage: `I approach challenges in a structured and solution-oriented way, focusing on efficient, clean and sustainable solutions.`
            }
        ]
    };

    getAboutMeDataEn(): AboutMe{
        return this.aboutMeEn;
    }

    private readonly aboutMeDe: AboutMe = {
        aboutMeEyeBrow: 'Wer ich bin',
        aboutMeTitle: 'Über mich',
        aboutMeDescription: `Hallo, ich bin Enrico. Seit über 10 Jahren arbeite ich im IT-Bereich und beschäftige mich seit einigen Jahren intensiv mit der Softwareentwicklung. 
            Besonders reizt mich daran, Herausforderungen aus dem Arbeitsalltag mit kleinen Scripts oder Anwendungen effizient zu lösen.
            Am Programmieren begeistert mich, wie viel man oft mit vergleichsweise wenig Aufwand erreichen kann. 
            Es motiviert mich, ständig dazuzulernen und immer bessere Lösungen zu entwickeln.?`,
        aboutMeEntrys: [
            {
                entryIconName: 'location_on',
                entryMessage: 'Ich lebe in der Nähe von Tübingen und bin offen für Remote-Arbeit sowie neue berufliche Möglichkeiten.'
            },
            {
                entryIconName: 'cognition',
                entryMessage: 'Ich arbeite mich gerne in neue Technologien ein und entwickle meine Fähigkeiten kontinuierlich weiter, um immer bessere Lösungen zu finden.'
            },
            {
                entryIconName: 'new_releases',
                entryMessage: `Ich gehe Herausforderungen strukturiert und lösungsorientiert an und lege Wert auf effiziente, saubere und nachhaltige Lösungen.`
            }
        ]
    };

    getAboutMeDataDe(): AboutMe {
        return this.aboutMeDe;
    }
}