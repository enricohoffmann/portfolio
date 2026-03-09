import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-portfolio-dialog',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-dialog.component.html',
  styleUrl: './portfolio-dialog.component.scss'
})
export class PortfolioDialogComponent {

  @Input() projectData?: {} | null;
  @Output() dialogClose = new EventEmitter<boolean>()

  ngOnInit(){
    this.openDialog();
  }

  ngOnDestroy(){
    this.closeDialog();
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
