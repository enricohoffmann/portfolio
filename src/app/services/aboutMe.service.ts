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
                entryMessage: 'Where are you based? Would you be open to working remotely or potentially relocating?'
            },
            {
                entryIconName: 'cognition',
                entryMessage: 'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?'
            },
            {
                entryIconName: 'new_releases',
                entryMessage: `A brief description of your problem-solving approach. 
                            Do you learn from each challenge as you search for the most efficient or elegant solution? 
                            You can include some keywords like: analytical thinking, creativity, persistence and  collaboration.`
            }
        ]
    };

    getAboutMeDataEn(){
        return this.getAboutMeDataEn;
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
                entryMessage: 'Where are you based? Would you be open to working remotely or potentially relocating?'
            },
            {
                entryIconName: 'cognition',
                entryMessage: 'Show that you are open-minded. Are you enthusiastic about learning new technologies and continually improving your skills?'
            },
            {
                entryIconName: 'new_releases',
                entryMessage: `A brief description of your problem-solving approach. 
                            Do you learn from each challenge as you search for the most efficient or elegant solution? 
                            You can include some keywords like: analytical thinking, creativity, persistence and  collaboration.`
            }
        ]
    };
}