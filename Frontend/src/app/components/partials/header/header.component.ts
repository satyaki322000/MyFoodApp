import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { CartService } from './../../../services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user!:User;
  cartQuantity=0;
  constructor(cartService:CartService,private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    })
    userService.userObservable?.subscribe((newUser => {
      this.user = newUser;
    }))
   }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
