import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any;
  imageUrl:string='http://rjtmobile.com/grocery/images/';

  constructor(private dataService: DataService, private router:Router) { 
    this.dataService.getCategory().subscribe((response:any)=>{
      this.categories = response.data;
    })
  }
 
  ngOnInit(): void {
  }

  categorySelected(catId:any){
    this.router.navigate(['products', catId]);
  }
}
