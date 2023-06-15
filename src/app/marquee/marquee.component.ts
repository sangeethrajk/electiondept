import { Component } from '@angular/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent {

  constructor(private translationService: TranslationService) { }

  switchToEnglish(): void {
    this.translationService.switchLanguage('en');
  }

  switchToTamil(): void {
    this.translationService.switchLanguage('ta');
  }

}
