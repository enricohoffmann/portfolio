import { Injectable, inject } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

import { BehaviorSubject, Observable, distinctUntilChanged, map } from "rxjs";

type DisplayMode = 'DESKTOP' | 'MOBILE';
const BREAKPOINT_MOBILE = '(max-width: 900px)';

@Injectable({ providedIn: 'root' })
export class DisplayService {
    private displayMode = new BehaviorSubject<DisplayMode>('DESKTOP');

    displayMode$ = this.displayMode.asObservable();

    private breakpointObserver = inject(BreakpointObserver);

    constructor() {
        this.breakpointObserver
            .observe(BREAKPOINT_MOBILE)
            .pipe(
                map(state => state.matches ? 'MOBILE' as DisplayMode : 'DESKTOP' as DisplayMode),
                distinctUntilChanged()
            )
            .subscribe(mode => this.setDisplayMode(mode));
    }

   
    setDisplayMode(mode: DisplayMode): void {
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