import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../../../ui/card/card.component";
import { ProjectEntry } from '../../../../interfaces/project.interface';
import { SkillIconComponent } from '../../../../ui/skill-icon/skill-icon.component';
import { ButtonComponent } from "../../../../ui/button/button.component";
import { PortfolioDataService } from '../../../../services/portfolio-data.service';
import { LanguageService } from '../../../../services/language.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-portfolio-dialog-content',
  standalone: true,
  imports: [CardComponent, SkillIconComponent, ButtonComponent, AsyncPipe],
  templateUrl: './portfolio-dialog-content.component.html',
  styleUrl: './portfolio-dialog-content.component.scss'
})
/**
 * @description The PortfolioDialogContentComponent is an Angular component that represents the content of a dialog displaying details about a specific project in the portfolio section of the application. 
 * It takes in a ProjectEntry object as input, which contains information about the project such as its title, description, skills used, and links to GitHub and live demo. The component also emits an event when the dialog is closed, 
 * allowing the parent component to handle the closing action. The component uses services such as PortfolioDataService to retrieve project data and LanguageService to determine the current language and display content accordingly. 
 * It also utilizes Angular's dependency injection system to inject the necessary services and manage state for displaying project details in a dialog format.
 * @namespace PortfolioDialogContentComponent
 */
export class PortfolioDialogContentComponent {
  @Input({required: true}) projectEntry!: ProjectEntry;
  @Output() dialogContentCloseEvent = new EventEmitter();

  constructor(private projectDataService: PortfolioDataService, private languageService: LanguageService){}

  /**
   * @description The liveTestButtonText$ observable is a derived observable that emits the appropriate text for the "Live Test" button based on the current language selected in the application. It uses the selectByLanguage method from the LanguageService to determine whether to emit "Live ansehen" for German or "Live Test" for English. This allows the button text to dynamically change based on the user's language preference, providing a localized experience in the portfolio dialog.
   * @returns Observable<string> An observable that emits the appropriate text for the "Live Test" button based on the current language.
   * @memberof PortfolioDialogContentComponent
   */
  liveTestButtonText$: Observable<string> = this.languageService.selectByLanguage('Live ansehen', 'Live Test');

  /**
   * @description The nextProjectBottonText$ observable is a derived observable that emits the appropriate text for the "Next Project" button based on the current language selected in the application. It uses the selectByLanguage method from the LanguageService to determine whether to emit "Weiteres Projekt" for German or "Next project" for English. This allows the button text to dynamically change based on the user's language preference, providing a localized experience in the portfolio dialog when navigating to the next project.
   * @returns Observable<string> An observable that emits the appropriate text for the "Next Project" button based on the current language.
   * @memberof PortfolioDialogContentComponent
   */
  nextProjectBottonText$: Observable<string> = this.languageService.selectByLanguage('Weiteres Projekt', 'Next project');

  /**
   * @description The onNextProject method is a handler function that is called when the user clicks on the "Next Project" button in the portfolio dialog. It retrieves the next project entry using the getNextProject method from the PortfolioDataService, passing in the current project's ID. The retrieved project entry is then assigned to the projectEntry property, which updates the content of the dialog to display the details of the next project. This allows users to navigate through different projects in the portfolio dialog without having to close and reopen it.
   * @returns void
   * @memberof PortfolioDialogContentComponent
   */
  onNextProject(): void{
    this.projectEntry = this.projectDataService.getNextProject(this.projectEntry.id);
  }

  /**
   * @description The onDialogContentCloseAction method is a handler function that is called when the user performs an action to close the portfolio dialog, such as clicking a close button. It emits the dialogContentCloseEvent, which can be listened to by the parent component to handle the closing of the dialog. This allows for communication between the PortfolioDialogContentComponent and its parent component, enabling the parent to respond appropriately when the dialog is closed, such as updating state or performing cleanup actions.
   * @returns void
   * @memberof PortfolioDialogContentComponent
   */
  onDialogContentCloseAction(): void{
    this.dialogContentCloseEvent.emit();
  }

  /**
   * @description The getCurrentDescription method returns the description of the current project based on the selected language. It checks the current language using the LanguageService and returns the appropriate description in either German or English. This method allows the portfolio dialog to display the project description in the correct language based on the user's language preference.
   * @returns string The description of the current project in the selected language.
   * @memberof PortfolioDialogContentComponent
   */
  getCurrentDescription(): string{
    return this.languageService.getCurrentLanguage() === 'DE' ? this.projectEntry.descriptionDe : this.projectEntry.descriptionEn;
  }

  /**
   * @description The getCurrentProjectSubtitle method returns the subtitle of the current project based on the selected language. It checks the current language using the LanguageService and returns the appropriate subtitle in either German or English. This method allows the portfolio dialog to display the project subtitle in the correct language based on the user's language preference.
   * @returns string The subtitle of the current project in the selected language.
   * @memberof PortfolioDialogContentComponent
   */
  getCurrentProjectSubtitle(): string{
    return this.languageService.getCurrentLanguage() === 'DE' ? 'Worum geht es in diesem Projekt?' : 'What is this project about?';
  }

}
