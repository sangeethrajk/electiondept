import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})
export class HomeComponent {

  constructor(private translationService: TranslationService) { }

  switchToEnglish(): void {
    this.translationService.switchLanguage('en');
  }

  switchToTamil(): void {
    this.translationService.switchLanguage('ta');
  }

}
