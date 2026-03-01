import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() contactTitle: string = "";
  @Input() contactPlacholder: string = "";
  @Input() contactItemIndex: string = "";
  @Input() contactErrorText: string = "";
  inputValue?: string;
  isChanged: boolean = false;
  placeHolderText: string = "";
  hasError: boolean = false;

  ngOnInit(){
    this.placeHolderText = this.contactPlacholder;
  }

  onMouseEnter(){
    
  }

  onMouseLeave(){
    
  }

  onInput(): void{
    this.isChanged = true;
    this.hasError = false;
  }

  onBlur(value: string){
    if(value){
      this.inputValue = value;
    }else{
      this.placeHolderText = this.contactErrorText;
      this.hasError = true;
    }


  }

}
