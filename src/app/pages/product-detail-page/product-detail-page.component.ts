import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  id:any;
  imageUrl:string='http://rjtmobile.com/grocery/images/';
  added:any;
  pdt: any;

  constructor(private dataService: DataService, private cartService:CartService, private activatedRoute: ActivatedRoute, private cartEmitter: EmitterService) { 

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getProductsById(this.id).subscribe((response:any)=>{
      this.pdt=response.data;

      if(this.cartService.isInCart(this.pdt)){
        this.added=true;
      }
      else
        this.added=false;
    });    

    this.cartEmitter.trashEmitter.subscribe((removedPdt:any)=>{
      if(this.pdt._id == removedPdt._id)
      {
        this.added=false;
      }
    })

  }

  ngOnInit(): void {
  } 

  addToCart(){
    this.cartService.addItem(this.pdt);
    this.added=true;
  } 

  removeFromCart(){
    this.added=false;
    this.cartService.removeItem(this.pdt);
  }

}
