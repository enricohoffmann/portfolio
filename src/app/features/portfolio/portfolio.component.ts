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
  portfolioPojects: Record<string, string[]> = {
    "Join": [
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase"
    ],
    "El Pollo Loco": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "Pokedex": [
      "HTML",
      "CSS",
      "JavaScript"
    ]

  };

  
}
