import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

type Language = 'DE' | 'EN';

@Injectable({providedIn: 'root'})
export class LanguageService {

    private language = new BehaviorSubject<Language>('EN');

    language$ = this.language.asObservable();

    setLanguage(lang: Language): void{
        this.language.next(lang);
    }

    getCurrentLanguage(): Language {
        return this.language.getValue();
    }
}