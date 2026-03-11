import { Component, Input } from '@angular/core';
import { CardComponent } from "../../../../ui/card/card.component";
import { ProjectEntry } from '../../../../interfaces/projectEntry.interface';
import { SkillIconComponent } from '../../../../ui/skill-icon/skill-icon.component';

@Component({
  selector: 'app-portfolio-dialog-content',
  standalone: true,
  imports: [CardComponent, SkillIconComponent],
  templateUrl: './portfolio-dialog-content.component.html',
  styleUrl: './portfolio-dialog-content.component.scss'
})
export class PortfolioDialogContentComponent {
  @Input({required: true}) projectEntry!: ProjectEntry;
}
