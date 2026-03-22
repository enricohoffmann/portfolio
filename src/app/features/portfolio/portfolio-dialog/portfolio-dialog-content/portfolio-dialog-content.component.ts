import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../../../ui/card/card.component";
import { ProjectEntry } from '../../../../interfaces/project.interface';
import { SkillIconComponent } from '../../../../ui/skill-icon/skill-icon.component';
import { ButtonComponent } from "../../../../ui/button/button.component";
import { PortfolioDataService } from '../../../../services/portfolio-data.service';

@Component({
  selector: 'app-portfolio-dialog-content',
  standalone: true,
  imports: [CardComponent, SkillIconComponent, ButtonComponent],
  templateUrl: './portfolio-dialog-content.component.html',
  styleUrl: './portfolio-dialog-content.component.scss'
})
export class PortfolioDialogContentComponent {
  @Input({required: true}) projectEntry!: ProjectEntry;
  @Output() dialogContentCloseEvent = new EventEmitter();

  constructor(private projectDataService: PortfolioDataService){}


  onNextProject(): void{
    this.projectEntry = this.projectDataService.getNextProject(this.projectEntry.id);
  }

  onDialogContentCloseAction(){
    this.dialogContentCloseEvent.emit();
  }

}
