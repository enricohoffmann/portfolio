import { Component, Input } from '@angular/core';
import { CardComponent } from "../../../../ui/card/card.component";
import { ProjectEntry } from '../../../../interfaces/projectEntry.interface';
import { SkillIconComponent } from '../../../../ui/skill-icon/skill-icon.component';
import { ButtonComponent } from "../../../../ui/button/button.component";

@Component({
  selector: 'app-portfolio-dialog-content',
  standalone: true,
  imports: [CardComponent, SkillIconComponent, ButtonComponent],
  templateUrl: './portfolio-dialog-content.component.html',
  styleUrl: './portfolio-dialog-content.component.scss'
})
export class PortfolioDialogContentComponent {
  @Input({required: true}) projectEntry!: ProjectEntry;

}
