import { CartService } from './../../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQuantity:number = 0;
  constructor(cartService:CartService) {
    cartService.getCartobservable().subscribe((cart) => {
      this.cartQuantity = cart.totalCount;
    })
  }
}
