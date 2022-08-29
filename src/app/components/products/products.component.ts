import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  allProducts:any;
  catId: any;
  subName:any='All';
  imageUrl: string = 'http://rjtmobile.com/grocery/images/';
  subId: any=-1;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private subCatEmitter: EmitterService) {

    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.dataService.getProductsByCatId(this.catId).subscribe((response: any) => {
      this.allProducts = response.data;
      this.products=this.allProducts;
    });
    

    this.subCatEmitter.subEmitter.subscribe((value: any) => {
      if(value[0]==-1)
      {
        this.products=this.allProducts;
        this.subId=-1;
        this.subName='All';
      }
      else if (value[0] != this.subId) {
        this.subId = value[0];
        this.subName = value[1];
        console.log(value);
        this.dataService.getProductsBySubId(this.subId).subscribe((response: any) => {
          this.products = response.data;
        }) 
      }
    });


  }

  ngOnInit(): void {
  }

}
