import { Component, Input} from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from "@angular/router";
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() tragetFragment!: string;

  active$ = this.route.fragment.pipe(
    map(f => f === this.tragetFragment)
  );

  constructor(private route: ActivatedRoute){}

}
