import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private translationService: TranslationService) { }

  switchToEnglish(): void {
    this.translationService.switchLanguage('en');
  }

  switchToTamil(): void {
    this.translationService.switchLanguage('ta');
  }

}
