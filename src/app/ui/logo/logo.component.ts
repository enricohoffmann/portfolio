import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit{
  @Input() width?: number;
  @Input() hoverable : boolean = true;
  @Input() variant: 'full' | 'outline' | 'auto' = 'auto';
  @Input() targetFragment?: string;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    if(this.variant == "full"){
      this.hoverable = false;
    }

    if(this.targetFragment){
      this.route.fragment.pipe(map(f => f === this.targetFragment))
    }
  }

}
