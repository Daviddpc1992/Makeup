import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../interface/productos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;
  urlId: string;
  baseUrlBrand: string;

  constructor(
    private http: HttpClient
  ) {
   
    this.baseUrl = "http://makeup-api.herokuapp.com/api/v1/products.json",
    this.baseUrlBrand = "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=",
      this.urlId = "http://makeup-api.herokuapp.com/api/v1/products/"

  }

  getAll(): Promise<any>{
    return this.http.get(`${this.baseUrl}`).toPromise()
  }

  getByBrand(pList:any): Promise<any>{
    return this.http.get(`${this.baseUrlBrand}${pList}`).toPromise()
  }
  getbyId(pId:any){
    
    return this.http.get(`${this.urlId}/${pId}.json`).toPromise()
  }


}


