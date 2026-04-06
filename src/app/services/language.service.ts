import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

type Language = 'DE' | 'EN';

@Injectable({providedIn: 'root'})
export class LanguageService {

    private readonly STORAGE_KEY: string = "app_language";
    private language = new BehaviorSubject<Language>('EN');

    constructor(){
        const savedLanguage = this.readCurrentLanguageFromStorage();

        if(savedLanguage){
            this.language.next(savedLanguage);
        }
    }

    language$ = this.language.asObservable();

    setLanguage(lang: Language): void{
        this.language.next(lang);
        this.saveCurrentLanguageIntoLocalStorage(lang);
    }

    getCurrentLanguage(): Language {
        return this.language.getValue();
    }

    selectByLanguage<T>(deValue: T, enValue: T): Observable<T> {
        return this.language$.pipe(
            map(lang => lang === 'DE' ? deValue : enValue)
        );
    }

    private readCurrentLanguageFromStorage(): Language | null {
        try {
            const currentLanguageStorageValue = localStorage.getItem(this.STORAGE_KEY);
            return currentLanguageStorageValue === 'DE' || currentLanguageStorageValue === 'EN' ? currentLanguageStorageValue : null; 
        } catch {
            return null;
        }
    }

    private saveCurrentLanguageIntoLocalStorage(language: Language): void {
        try {
            localStorage.setItem(this.STORAGE_KEY, language);
        } catch {}
    }


}