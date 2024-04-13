import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = JSON.parse(localStorage.getItem('cartItems') || '[]');

  constructor() { }

  addToCart(product: any) {
    this.items.push({ ...product, quantity: 1 });
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  delete(item: any) {
    this.items = this.items.filter((i) => i.id !== item.id);

    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  incrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity++;
    }

    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }
  decrementQuantity(id: number) {
    let item = this.items.find((i) => i.id === id);
    if (item) {
      item.quantity--;
    }
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }
}
