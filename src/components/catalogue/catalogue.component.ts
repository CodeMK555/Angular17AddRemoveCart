import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.scss'
})
export class CatalogueComponent {
  cartService = inject(CartService);
  products :any[]= [
    {name: 'Product 1 ', price : 100 ,id:1},
    {name: 'Product 2 ', price : 200 ,id:2},
    {name: 'Product 3 ', price : 300 ,id:3},
    {name: 'Product 4 ', price : 400 ,id:4},

  ];

  addToCart(product:any){
    this.cartService.addToCart(product);
  }
  

}
