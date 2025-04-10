import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0.5; // Current rating (e.g., 4.5)
  @Output() ratingChange = new EventEmitter<number>(); // Emit rating changes
  showTooltip: boolean = false;
  tooltipPosition: { top: number; left: number } = { top: 0, left: 0 };
  stars: number[] = [1, 2, 3, 4, 5]; // Array for 5 stars
  Math = Math;
  // onRate(newRating: number): void {

  //   this.rating = newRating;
  //   this.ratingChange.emit(this.rating); // Emit the new rating

  // }
  onRatingChange(value: number) {
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }
  onMouseEnter(event: MouseEvent) {
    this.showTooltip = true;
    this.tooltipPosition = { top: event.clientY, left: event.clientX };
  }

  onMouseLeave() {
    this.showTooltip = false;
  }
}
