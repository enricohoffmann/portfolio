import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class MarqueeService {
    private readonly marqueeTextArrayEN: Array<string> = [
        'Available for remote work',
        'Frontend Developer',
        'Based in Tübingen',
        'Open to work',
    ];

    getMarqueeTextArrayEn(){
        return this.marqueeTextArrayEN;
    }

    private readonly marqueeTextArrayDe: Array<string> = [
        'Remote verfügbar',
        'Frontend-Entwickler',
        'Aus Tübingen',
        'Offen für neue Projekte',
    ];

    getMarqueeTextArrayDe(){
        return this.marqueeTextArrayDe;
    }
}