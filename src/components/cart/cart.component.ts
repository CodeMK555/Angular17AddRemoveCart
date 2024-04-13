import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CatalogueComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartService = inject(CartService);
  item: any;
  deleteFromCart(item: any) {
    this.cartService.delete(item);
  }


}
