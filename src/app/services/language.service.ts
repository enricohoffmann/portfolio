import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

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

    selectByLanguage<T>(deValue: T, enValue: T): Observable<T> {
        return this.language$.pipe(
            map(lang => lang === 'DE' ? deValue : enValue)
        );
    }
}