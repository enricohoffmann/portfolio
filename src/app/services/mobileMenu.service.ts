import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export type MobileNavFlow = 'closed' | 'overlay' | 'menuShow' | 'menuHide';

@Injectable({providedIn: 'root'})
export class MobileNavFlowService {
    private mobileFlow = new BehaviorSubject<MobileNavFlow>('closed');

    mobileFlow$ = this.mobileFlow.asObservable();

    setMobileFlow(flow: MobileNavFlow): void {
        this.mobileFlow.next(flow);
    }

    getCurrentMobilNavFlow():MobileNavFlow {
        return this.mobileFlow.value;
    } 
    
}
