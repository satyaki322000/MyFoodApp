// Removed duplicate import of sample_foods
import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods: Food[] = [];
  rating: number = 0;
  constructor(private foodService: FoodService,private active:ActivatedRoute) {
    this.active.params.subscribe((params)=>{
      console.log("inside params");
      if(params.searchTerm){
        this.foods=this.foodService.getallFoodBySearchTerm(params.searchTerm);
      }
      else if(params.tag){
        this.foods=this.foodService.getAllFoodsByTag(params.tag);
      }
      else{
        this.foods = this.foodService.getAll();
        console.log(false);
      }
    })

  }
}
