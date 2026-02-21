import { Component } from '@angular/core';
import { PortfolioMenuComponent } from "./portfolio-menu/portfolio-menu.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioMenuComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  portfolioPojects= {
    "Join" : [["JavaScript","HTML","CSS","Firebase"],"portfolio_join"],
    "El Pollo Loco": [["HTML","CSS","JavaScript"], "portfolio_el-pollo-loco"],
    "Pokedex": [["HTML","CSS","JavaScript"],"portfolio_pokedex"]
  };

  

}
