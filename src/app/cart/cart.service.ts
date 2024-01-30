import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = environment.apiUrl + "/cart"

  constructor(private httpClient: HttpClient) { }

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  clearCart(): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl);
  }
}
