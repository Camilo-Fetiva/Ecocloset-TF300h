import { Component } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterOutlet], //<- USO EN EL COMPONENT
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

}
