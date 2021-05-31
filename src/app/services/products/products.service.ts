import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../models/Products'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiURL: string = 'http://127.0.0.1:5005';
  products$ = new EventEmitter<any>();


  constructor(
    private http:     HttpClient
  ) { 
    
  }


  getProducts(): Observable<Products>{
    return this.http.get<Products>(this.apiURL+'/api/products');
  }
   getProductsById(product_id){
    return this.http.get<Products>(this.apiURL+'/api/products/'+product_id);
  }

  registerProducts(product: Products): Observable<Products>{
    console.log('service ', product)
    return this.http.post<Products>(this.apiURL+'/api/products', product)
  }
  deleteProducts(product_id){
    return this.http.delete<Products>(this.apiURL+'/api/products/'+product_id);
  }
}
