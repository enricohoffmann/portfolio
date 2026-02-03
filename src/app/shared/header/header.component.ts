import { Component } from '@angular/core';
import { LogoComponent } from "../ui/logo/logo.component";
import { LanguageToggleComponent } from "../ui/language-toggle/language-toggle.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, LanguageToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
