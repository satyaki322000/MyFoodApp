import { Component } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../../services/cart.service';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-page',
  standalone: false,
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  order:Order=new Order();
  checkoutForm!:FormGroup;
  constructor(cartService:CartService,
    private fb:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService
  ){
    const cart=cartService.getCart()
    this.order.items=cart.items;
    this.order.totalPrice=cart.totalPrice;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let{name,address}=this.userService.currentUser;
    this.checkoutForm=this.fb.group({
      name:new FormControl(name,Validators.required),
      address:new FormControl(address,Validators.required)
    });
  }

  get fc(){
    return this.checkoutForm.controls;
  }

  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs','Invalid Inputs')
      return;
    }
    else{
      this.order.name=this.fc.name.value;
      this.order.address=this.fc.address.value;
      console.log(this.order);
    }
  }
}
