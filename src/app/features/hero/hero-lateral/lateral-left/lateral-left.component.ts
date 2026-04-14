import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lateral-left',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lateral-left.component.html',
  styleUrl: './lateral-left.component.scss'
})

/**
 * @description The LateralLeftComponent is an Angular component that represents the left lateral section of the hero component. 
 * It is responsible for displaying the content and navigation links on the left side of the hero section. The component uses Angular's RouterLink directive to enable navigation to different 
 * sections of the application when the user clicks on the links. The template and styles for this component are defined in separate HTML and SCSS files, respectively. The component is decorated with the 
 * @Component decorator, which specifies the selector, template, and style information for the component. This allows the LateralLeftComponent to be easily reused and integrated into other parts of the application where the left lateral 
 * section of the hero component is needed.
 * @namespace LateralLeftComponent
 */
export class LateralLeftComponent {

}
