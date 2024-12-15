import { Component } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

// Importar la card
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ProductCardComponent], //<- USO EN EL COMPONENT
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

}
