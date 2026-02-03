import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit{
  @Input() width?: number;
  @Input() hoverable : boolean = true;
  @Input() variant: 'full' | 'outline' | 'auto' = 'auto';

  ngOnInit(): void {
    if(this.variant == "full"){
      this.hoverable = false;
    }
  }

}
