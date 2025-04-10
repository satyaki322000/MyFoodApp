import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];
  rating: number = 0;
  constructor(private foodService: FoodService) {
    this.foods = this.foodService.getAll();
    console.log(this.foods);
  }
  onRatingChange(newRating: number,index:any) {
        this.rating = newRating;
        console.log('New Rating:', this.rating);
        this.foods[index].stars = this.rating;
      }
}
