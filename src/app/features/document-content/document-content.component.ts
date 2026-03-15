import { Component, Input } from '@angular/core';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';

@Component({
  selector: 'app-document-content',
  standalone: true,
  imports: [],
  templateUrl: './document-content.component.html',
  styleUrl: './document-content.component.scss'
})
export class DocumentContentComponent {
  @Input() pageContent?: PageTextContent;
}


