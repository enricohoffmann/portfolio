import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PortfolioDialogContentComponent } from "./portfolio-dialog-content/portfolio-dialog-content.component";
import { ProjectEntry } from '../../../interfaces/projectEntry.interface';

@Component({
  selector: 'app-portfolio-dialog',
  standalone: true,
  imports: [PortfolioDialogContentComponent],
  templateUrl: './portfolio-dialog.component.html',
  styleUrl: './portfolio-dialog.component.scss'
})
export class PortfolioDialogComponent {

  @Input() projectData?: ProjectEntry | null;
  @Output() dialogClose = new EventEmitter<boolean>()

  ngOnInit(){
    this.openDialog();
  }

  onOverlayClick(event: MouseEvent): void {
    if(event.target === event.currentTarget){
      this.closeDialog();
    }
  }

  ngOnDestroy(){
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    this.projectData = null;
  }

  openDialog(){
    console.log(this.projectData);
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  }

  closeDialog(){  
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
    this.projectData = null;
    this.dialogClose.emit(true);
  }

}
