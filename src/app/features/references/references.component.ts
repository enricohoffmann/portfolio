import { Component } from '@angular/core';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  currentIndex = 0;
  currentDotIndex = 0;
  isAnimating = false;
  animationReset = false;
  direktion: 'left' | 'right' | 'none' = 'none';

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


  ngOnInit(){
    this.currentIndex = Math.floor((0 + this.referencesArray.length) / 2);
    console.log(this.direktion);
    
  }

  getIndexLeft(){
    return (this.currentIndex - 1 + this.referencesArray.length) % this.referencesArray.length;
  }

  getIndexLeftOff(){
    return (this.currentIndex - 2 + this.referencesArray.length) % this.referencesArray.length;
  }

  getIndexRight(){
    return (this.currentIndex + 1) % this.referencesArray.length;
  }

  getIndexRightOff(){
    return (this.currentIndex + 2) % this.referencesArray.length;
  }

  referencesBackClick(){
    if(this.isAnimating){return;}
    this.isAnimating = true;
    this.direktion = 'left';
    this.currentDotIndex = Math.floor(this.currentDotIndex - 1 + 3) % 3;
    this.currentIndex = Math.floor(this.currentIndex - 1 + this.referencesArray.length) % this.referencesArray.length;

    setTimeout(() => {
      this.isAnimating = false;
    }, 3000);
  }

  referencesForwardClick(){
    if(this.isAnimating){return;}
    this.isAnimating = true;
    this.direktion = 'right'
    this.currentDotIndex = Math.floor(this.currentDotIndex + 1) % 3;
    this.currentIndex = Math.floor(this.currentIndex + 1) % this.referencesArray.length;
  }

}
