import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "../components/cart/cart.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CartComponent]
})
export class AppComponent {
  title = 'Ecom';
}
