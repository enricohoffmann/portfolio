import { Component, Input } from '@angular/core';
import { PageTextContent } from '../../interfaces/pageTextContent.interface';

@Component({
  selector: 'app-document-content',
  standalone: true,
  imports: [],
  templateUrl: './document-content.component.html',
  styleUrl: './document-content.component.scss'
})
/**
 * @description The DocumentContentComponent is an Angular component that is responsible for displaying the content of a page. 
 * It takes in a PageTextContent object as input, which contains the text content to be displayed on the page. The component uses this input to render the appropriate content in its template.
 * @namespace DocumentContentComponent
 */
export class DocumentContentComponent {
  @Input() pageContent?: PageTextContent;
}


