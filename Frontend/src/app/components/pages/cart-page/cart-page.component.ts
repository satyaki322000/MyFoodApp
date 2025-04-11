import { Component } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  standalone: false,
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartservice:CartService){
    this.cartservice.getCartobservable().subscribe((cart)=>{
      this.cart=cart;
    })
  }

  removeFromCart(cartItem:CartItem){
    this.cartservice.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    let quantity=parseInt(quantityInString);
    if(isNaN(quantity) || quantity<1){
      quantity=1;
    }
    this.cartservice.changeQuantity(cartItem.food.id, quantity);
  }
}
