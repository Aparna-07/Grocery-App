import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BaseUrl:string='http://apolis-grocery.herokuapp.com/api/';
  constructor(private http: HttpClient) { }

  getCategory(): Observable<any>{
    return this.http.get<any>(`${this.BaseUrl}category`);
  }

  getSubCategoryByCatId(catId:any):Observable<any>{
    return this.http.get<any>(`${this.BaseUrl}subcategory/${catId}`);
  }

  getProductsByCatId(catId:any):Observable<any>{
    return this.http.get<any>(`${this.BaseUrl}products/cat/${catId}`);
  }

  getProductsBySubId(subId:any):Observable<any>{
    return this.http.get<any>(`${this.BaseUrl}products/sub/${subId}`);
  }

  getProductsById(id:any):Observable<any>{
    return this.http.get<any>(`${this.BaseUrl}products/${id}`);
  }
}
