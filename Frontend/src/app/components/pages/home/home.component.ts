// Removed duplicate import of sample_foods
import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { sample_foods } from '../../../../data';
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
        console.log(this.foods[index]);

        sample_foods[index]= this.foods[index];
        console.log(sample_foods);

      }
}
