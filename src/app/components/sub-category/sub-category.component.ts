import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { EmitterService } from 'src/app/services/emitter.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html', 
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  subCategories:any;
  catId:any;
  catName='Subcategories'
  selectedIndex:any=-1;

  constructor(private dataService:DataService, private activatedRoute: ActivatedRoute,  private subCatEmitter: EmitterService) { 

    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.dataService.getSubCategoryByCatId(this.catId).subscribe((response:any)=>{
      this.subCategories=response.data;
    })
  }

  ngOnInit(): void {
  }
  subCatSelected(subId: any, subName:any, i:number) { 
    this.subCatEmitter.subCatSelected(subId, subName);
    this.selectedIndex=i;
  }
}
