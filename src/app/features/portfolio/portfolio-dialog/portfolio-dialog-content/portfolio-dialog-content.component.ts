import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../../../ui/card/card.component";
import { ProjectEntry } from '../../../../interfaces/project.interface';
import { SkillIconComponent } from '../../../../ui/skill-icon/skill-icon.component';
import { ButtonComponent } from "../../../../ui/button/button.component";
import { PortfolioDataService } from '../../../../services/portfolio-data.service';
import { LanguageService } from '../../../../services/language.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-portfolio-dialog-content',
  standalone: true,
  imports: [CardComponent, SkillIconComponent, ButtonComponent, AsyncPipe],
  templateUrl: './portfolio-dialog-content.component.html',
  styleUrl: './portfolio-dialog-content.component.scss'
})
export class PortfolioDialogContentComponent {
  @Input({required: true}) projectEntry!: ProjectEntry;
  @Output() dialogContentCloseEvent = new EventEmitter();

  constructor(private projectDataService: PortfolioDataService, private languageService: LanguageService){}

  liveTestButtonText$: Observable<string> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? 'Live ansehen' : 'Live Test')
  );

  nextProjectBottonText$: Observable<string> = this.languageService.language$.pipe(
    map(lang => lang === 'DE' ? 'Weiteres Projekt' : 'Next project')
  );

  onNextProject(): void{
    this.projectEntry = this.projectDataService.getNextProject(this.projectEntry.id);
  }

  onDialogContentCloseAction(){
    this.dialogContentCloseEvent.emit();
  }

  getCurrentDescription(): string{
    return this.languageService.getCurrentLanguage() === 'DE' ? this.projectEntry.descriptionDe : this.projectEntry.descriptionEn;
  }

  getCurrentProjectSubtitle(): string{
    return this.languageService.getCurrentLanguage() === 'DE' ? 'Worum geht es in diesem Projekt?' : 'What is this project about?';
  }

}
