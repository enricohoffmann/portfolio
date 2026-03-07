import { Component, Input } from '@angular/core';
import { PrivacyCheck } from '../../interfaces/privacy.interface';
import { ControlContainer, FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-check-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './check-box.component.html',
  styleUrl: './check-box.component.scss',
  viewProviders: [
    {provide: ControlContainer, useExisting: NgForm}
  ]
})
export class CheckBoxComponent {
  @Input({required: true}) privacyCheck!: PrivacyCheck;
}
