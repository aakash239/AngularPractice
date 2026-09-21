import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

@Service()
export class Products {
  apiURL = "https://dummyjson.com/products";
  private http: HttpClient = inject(HttpClient);

  getProducts() {
    return this.http.get<any>(this.apiURL);
  }
}