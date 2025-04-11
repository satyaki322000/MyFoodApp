import { FoodService } from './../../../services/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: false,
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food;
  constructor(activate:ActivatedRoute,FoodService:FoodService,
    private cartservice:CartService,private route:Router){
    activate.params.subscribe((params)=>{
      if(params.id){
        this.food=FoodService.getFoodById(params.id);
      }
    })
  }

  addToCart(){
    this.cartservice.addToCart(this.food);
    this.route.navigateByUrl('/cart-page');
  }
}
