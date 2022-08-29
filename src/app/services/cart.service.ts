import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any[]=[];

  constructor() {
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart')!);
    }
   }

  addItem(item: any) {
    this.cart.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  removeItem(item: any) {
    this.cart = this.cart.filter((value: any) => JSON.stringify(value) !== JSON.stringify(item));
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
  getItems() {
    return this.cart;
  }
  isInCart(pdt:any):boolean{
    for(let i=0;i<this.cart.length;i++){
      if(JSON.stringify(this.cart[i])== JSON.stringify(pdt)){
        return true;
      }
    }
    return false;  
  }
  getTotal(){
    let sum=0;
    for(let x=0;x<this.cart.length;x++)
    {
      sum+= this.cart[x].price;
    }
    return sum;
  }
}
