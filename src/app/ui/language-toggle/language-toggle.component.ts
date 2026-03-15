import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.scss'
})
export class LanguageToggleComponent {
  language: 'EN' | 'DE' = 'EN';

  constructor(private languageService: LanguageService){}

  ngOnInit(){
    this.language = this.languageService.getCurrentLanguage();
  }

  onLanguageChange(): void {
    this.languageService.setLanguage(this.language);
  }
}
