import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioDialogContentComponent } from "./portfolio-dialog-content/portfolio-dialog-content.component";
import { ProjectEntry } from '../../../interfaces/project.interface';
import { PortfolioDataService } from '../../../services/portfolio-data.service';

@Component({
  selector: 'app-portfolio-dialog',
  standalone: true,
  imports: [PortfolioDialogContentComponent],
  templateUrl: './portfolio-dialog.component.html',
  styleUrl: './portfolio-dialog.component.scss'
})

/**
 * @description The PortfolioDialogComponent is an Angular component that represents a dialog for displaying project details in the portfolio section of the application. 
 * It takes in a project ID as input and retrieves the corresponding project data from the PortfolioDataService. The component manages the state of the dialog, including opening and closing it, 
 * and emits an event when the dialog is closed. It also handles user interactions such as clicking on the overlay to close the dialog. The component uses Angular's dependency injection system to inject the 
 * PortfolioDataService and manage the retrieval of project data based on the provided project ID.
 * @namespace PortfolioDialogComponent
 */
export class PortfolioDialogComponent {

  projectData: ProjectEntry | undefined | null;
  @Input() projectId?: string;
  @Output() dialogClose = new EventEmitter<boolean>()

  constructor(private projectDataService: PortfolioDataService){}

  /**
   * @description The ngOnInit method is a lifecycle hook in Angular that is called after the component has been initialized. In this method, we check if the projectId input property is defined. If it is not defined, 
   * we simply return and do not perform any further actions. If the projectId is defined, we use the PortfolioDataService to retrieve the project data corresponding to the provided project ID. We assign the retrieved project data to the projectData property of the component. If the retrieved project data is undefined (i.e., no project matches the provided ID), we return without opening the dialog. If valid project data is retrieved, we call the openDialog method to open the portfolio dialog and display the project details.
   * @returns void
   * @memberof PortfolioDialogComponent
   */
  ngOnInit(): void{
    if(!this.projectId){return;}
    this.projectData = this.projectDataService.getProjectById(this.projectId);
    if(this.projectData === undefined){return;}
    this.openDialog();
  }

  /**
   * @description The onOverlayClick method is an event handler that is called when the user clicks on the overlay of the portfolio dialog. It takes in a MouseEvent as a parameter and checks if the target of the event is the same as the current target (the overlay). If the target is the same as the current target, it means that the user clicked on the overlay and not on any other element within the dialog. In this case, we call the closeDialog method to close the portfolio dialog. This allows users to close the dialog by clicking outside of it, providing a convenient way to exit the dialog view.
   * @returns void
   * @memberof PortfolioDialogComponent
   * @param event 
   */
  onOverlayClick(event: MouseEvent): void {
    if(event.target === event.currentTarget){
      this.closeDialog();
    }
  }

  /**
   * @description The ngOnDestroy method is a lifecycle hook in Angular that is called just before the component is destroyed. In this method, we perform cleanup tasks such as removing any CSS classes that were added to the body and documentElement to prevent scrolling when the dialog was open. We also set the projectData property to null to release any references to the project data and allow for garbage collection. This ensures that when the component is destroyed, it does not leave behind any unwanted side effects or memory leaks.
   * @returns void
   * @memberof PortfolioDialogComponent
   */
  ngOnDestroy(): void{
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    this.projectData = null;
  }

  /**
   * @description The openDialog method is responsible for opening the portfolio dialog. When this method is called, it adds CSS classes to the body and documentElement to prevent scrolling while the dialog is open. This ensures that the user cannot scroll the background content when the dialog is active, providing a better user experience. The method does not take any parameters and does not return any value.
   * @returns void
   * @memberof PortfolioDialogComponent
   */
  openDialog(): void{
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  }

  /**
   * @description The closeDialog method is responsible for closing the portfolio dialog. When this method is called, it removes the CSS classes from the body and documentElement that were added to prevent scrolling when the dialog was open. This allows the user to scroll the background content again once the dialog is closed. Additionally, the method sets the projectData property to null to release any references to the project data and allow for garbage collection. Finally, it emits an event using the dialogClose EventEmitter to notify any parent components that the dialog has been closed. This allows for communication between components and enables parent components to perform any necessary actions when the dialog is closed.
   * @returns void
   * @memberof PortfolioDialogComponent
   */
  closeDialog(): void{  
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    this.projectData = null;
    this.dialogClose.emit(true);
  }

}
