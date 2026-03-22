import { Component } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ReferenceEntry } from '../../interfaces/reference.interface';
import { ReferenceDateService } from '../../services/reference.service';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CardComponent, CommonModule, AsyncPipe],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentIndex: number = 0;
  currentDotIndex: number = 0;
  isAnimating: boolean = false;
  direktion: 'left' | 'right' | 'none' = 'none';
  noAnimationIndex: number | null = null;
  currentArrayLenght: number = 0;
  private referencesSubscription?: Subscription;

  constructor(private languageService: LanguageService, private referenceService: ReferenceDateService){}

  currentReferencesHeadline$: Observable<string> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? 'So arbeite ich': 'This is how I work')
  );

  referencesArray$: Observable<ReferenceEntry[]> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? this.referenceService.getReferneceArrayDe() : this.referenceService.getReferneceArrayEn())
  );

 
  ngOnInit() {
    this.referencesSubscription = this.referencesArray$.subscribe(array => {
      const isFirstLoad = this.currentArrayLenght === 0;
      this.currentArrayLenght = array.length;

      if(this.currentArrayLenght === 0){
          this.currentIndex = 0;
          return;
      }

      if(isFirstLoad) {
        this.currentIndex = Math.floor(array.length / 2);
        return;
      }

      if(this.currentIndex >= this.currentArrayLenght){
        this.currentIndex = this.currentArrayLenght - 1;
      }
      
    });
  }

  ngOnDestroy(){
    this.referencesSubscription?.unsubscribe();
  }

  getIndexLeft(): number {
    return (this.currentIndex - 1 + this.currentArrayLenght) % this.currentArrayLenght;
  }

  getIndexLeftOff(): number {
    return (this.currentIndex - 2 + this.currentArrayLenght) % this.currentArrayLenght;
  }

  getIndexRight(): number {
    return (this.currentIndex + 1) % this.currentArrayLenght;
  }

  getIndexRightOff(): number {
    return (this.currentIndex + 2) % this.currentArrayLenght;
  }

  referencesBackClick():void  {
    if (this.isAnimating) { return; }
    this.isAnimating = true;
    this.direktion = 'left';
    this.currentDotIndex = Math.floor(this.currentDotIndex - 1 + 3) % 3;
    this.currentIndex = Math.floor(this.currentIndex - 1 + this.currentArrayLenght) % this.currentArrayLenght;
    this.calculateNoAnimationIndex();

  }

  referencesForwardClick():void {
    if (this.isAnimating) { return; }
    this.isAnimating = true;
    this.direktion = 'right'
    this.currentDotIndex = Math.floor(this.currentDotIndex + 1) % 3;
    this.currentIndex = Math.floor(this.currentIndex + 1) % this.currentArrayLenght;
    this.calculateNoAnimationIndex();

  }

  resetCardAnimation(event: Event): void {

    if(!this.isAnimating){return;}

    if ((event as TransitionEvent).propertyName !== "transform") { return; }
    const element = event.target as HTMLElement;
    if (!element.classList.contains('references-card-left-off') && !element.classList.contains('references-card-right-off')) { return; }

    this.noAnimationIndex = null;
    this.isAnimating = false;
    this.direktion = 'none';

  }


  calculateNoAnimationIndex(): void{
    if (this.direktion === 'left' && this.isAnimating) {
      const noAniIndex = this.getIndexRightOff() + 1;
      this.noAnimationIndex = noAniIndex === this.currentArrayLenght ? 0 : noAniIndex;
    }else if(this.direktion === 'right' && this.isAnimating){
      const noAniIndex = this.getIndexLeftOff() - 1;
      this.noAnimationIndex = noAniIndex === -1 ? this.currentArrayLenght - 1 : noAniIndex;
    }
  }



}
