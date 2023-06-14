import { Component } from '@angular/core';
import { VisitorCounterService } from '../visitor-counter.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // Visitor Count - Start
  count: number;

  constructor(private visitorCounterService: VisitorCounterService) {
    this.count = this.visitorCounterService.getCount();
  }
  // Visitor Count - End

}
