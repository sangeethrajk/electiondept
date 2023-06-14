import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitorCounterService {
  private count: number = 0;

  constructor() {
    this.loadCount();
    this.incrementCount();
  }

  getCount(): number {
    return this.count;
  }

  private incrementCount(): void {
    this.count++;
    this.saveCount();
  }

  private saveCount(): void {
    localStorage.setItem('visitorCount', this.count.toString());
  }

  private loadCount(): void {
    const savedCount = localStorage.getItem('visitorCount');
    if (savedCount) {
      this.count = parseInt(savedCount, 10);
    }
  }
}
