import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart: any;
  subTotal: any = 0;
  empty: boolean = true;
  imagePath: string = 'http://rjtmobile.com/grocery/images/';
  username=JSON.parse(localStorage.getItem('user')!).firstName;
  email=JSON.parse(localStorage.getItem('user')!).email;


  constructor(private cartService: CartService, private trashEmitter: EmitterService, private router:Router) {
  }

  ngOnInit(): void {
  }

  getCart() {
    this.cart = this.cartService.getItems();
    this.subTotal = this.cartService.getTotal();
    if(this.cart.length==0)
      this.empty=true;
    else
      this.empty=false;
  }

  removeCart(pdt: any) {
    this.cartService.removeItem(pdt);
    this.trashEmitter.trashClicked(pdt);
  }


  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login');
  }

}
