import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=this.getCartFromLocalStorage();
  private cartsubject= new BehaviorSubject<Cart>(this.cart);
  constructor() { }

  addToCart(food:Food){
    let cartItem=this.cart.items.find(item=>item.food.id===food.id);
    if(cartItem){
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.setCarttoLocalStorage();
  }

  removeFromCart(foodId:string){
    this.cart.items=this.cart.items.filter(item=>item.food.id!==foodId);
    this.setCarttoLocalStorage();
  }

  changeQuantity(foodId:string, quantity:number){
    let cartItem=this.cart.items.find(item=>item.food.id===foodId);
    if(!cartItem){return;}
    cartItem.quantity=quantity;
    cartItem.price=quantity*cartItem.food.price;
    this.setCarttoLocalStorage();
  }

  clearCart(){
    this.cart=new Cart();
    this.setCarttoLocalStorage();
  }

  getCartobservable():Observable<Cart>{
    return this.cartsubject.asObservable();
  }

  private setCarttoLocalStorage():void{
    this.cart.totalPrice=this.cart.items.reduce((total, item)=>total+item.price, 0);
    this.cart.totalCount=this.cart.items.reduce((total, item)=>total+item.quantity, 0);
    const cartJson=JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);
    this.cartsubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson=localStorage.getItem('cart');
    if(cartJson){
      return JSON.parse(cartJson);
    }
    return new Cart();
  }
}
