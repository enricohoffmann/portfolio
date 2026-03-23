import { Injectable, inject } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

import { BehaviorSubject, Observable, map } from "rxjs";

type DisplayMode = 'DESKTOP' | 'MOBILE';
const BREAKPOIN900 = '(max-width: 900px)';
const BREAKPOIN100 = '(min-width: 1000px)';

@Injectable({providedIn: 'root'})
export class DisplayService {
    private displayMode = new BehaviorSubject<DisplayMode>('DESKTOP');

    displayMode$ = this.displayMode.asObservable();

    private breakpointObserver = inject(BreakpointObserver); 


    ngOnInit(): void{

        console.log('TEST');
        

        this.breakpointObserver
            .observe([BREAKPOIN900, BREAKPOIN100])
            .subscribe(x => {
                if(x.breakpoints[BREAKPOIN900]){ this.setDisplayMode('MOBILE'); }
                if(x.breakpoints[BREAKPOIN100]) { this.setDisplayMode('DESKTOP'); }
            });
    }


    setDisplayMode(mode: DisplayMode): void {
        console.log(mode);
        this.displayMode.next(mode);
    }

    getCurrentDisplayMode(): DisplayMode {
        return this.displayMode.getValue();
    }

    selectViewByDisplayMode<T>(desktopValue: T, mobileValue: T): Observable<T> {
        return this.displayMode$.pipe(
            map(display => display === 'DESKTOP' ? desktopValue : mobileValue)
        );
    }
    
}