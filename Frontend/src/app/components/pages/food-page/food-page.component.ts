import { FoodService } from './../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';

@Component({
  selector: 'app-food-page',
  standalone: false,
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food;
  constructor(activate:ActivatedRoute,FoodService:FoodService){
    activate.params.subscribe((params)=>{
      if(params.id){
        this.food=FoodService.getFoodById(params.id);
      }
    })
  }
}
