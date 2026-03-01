import { Component } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentIndex = 0;
  currentDotIndex = 0;
  isAnimating = false;
  direktion: 'left' | 'right' | 'none' = 'none';
  noAnimationIndex: number | null = null;


  referencesArray = [
    {
      comment: "Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.",
      writer: "H.Janisch - Team Partner"
    },
    {
      comment: "Our project benefited enormously from Lukas efficient way of working.",
      writer: "T.Schulz - Frontend Developer"
    },
    {
      comment: "I had the good fortune of working with Simon in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
      writer: "A. Fischer - Team Partner"
    },
    {
      comment: "Our project benefited enormously from Simon efficient way of working.",
      writer: "T.Schulz - Frontend Developer"
    },
    {
      comment: "Our project benefited enormously from Simon efficient way of working.",
      writer: "T.Schulz - Frontend Developer"
    },
  ]


  ngOnInit() {
    this.currentIndex = Math.floor((0 + this.referencesArray.length) / 2);
  }

  getIndexLeft() {
    return (this.currentIndex - 1 + this.referencesArray.length) % this.referencesArray.length;
  }

  getIndexLeftOff() {
    return (this.currentIndex - 2 + this.referencesArray.length) % this.referencesArray.length;
  }

  getIndexRight() {
    return (this.currentIndex + 1) % this.referencesArray.length;
  }

  getIndexRightOff() {
    return (this.currentIndex + 2) % this.referencesArray.length;
  }

  referencesBackClick() {
    if (this.isAnimating) { return; }
    this.isAnimating = true;
    this.direktion = 'left';
    this.currentDotIndex = Math.floor(this.currentDotIndex - 1 + 3) % 3;
    this.currentIndex = Math.floor(this.currentIndex - 1 + this.referencesArray.length) % this.referencesArray.length;
    this.calculateNoAnimationIndex();

  }

  referencesForwardClick() {
    if (this.isAnimating) { return; }
    this.isAnimating = true;
    this.direktion = 'right'
    this.currentDotIndex = Math.floor(this.currentDotIndex + 1) % 3;
    this.currentIndex = Math.floor(this.currentIndex + 1) % this.referencesArray.length;
    this.calculateNoAnimationIndex();

  }

  resetCardAnimation(event: Event) {

    if(!this.isAnimating){return;}

    if ((event as TransitionEvent).propertyName !== "transform") { return; }
    const element = event.target as HTMLElement;
    if (!element.classList.contains('references-card-left-off') && !element.classList.contains('references-card-right-off')) { return; }

    this.noAnimationIndex = null;
    this.isAnimating = false;
    this.direktion = 'none';

  }


  calculateNoAnimationIndex(){
    if (this.direktion === 'left' && this.isAnimating) {
      const noAniIndex = this.getIndexRightOff() + 1;
      this.noAnimationIndex = noAniIndex === this.referencesArray.length ? 0 : noAniIndex;
    }else if(this.direktion === 'right' && this.isAnimating){
      const noAniIndex = this.getIndexLeftOff() - 1;
      this.noAnimationIndex = noAniIndex === -1 ? this.referencesArray.length - 1 : noAniIndex;
    }
  }



}
