import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    url : String = 'https://fakestoreapi.com/'
  
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.url+'products')
  }
}
