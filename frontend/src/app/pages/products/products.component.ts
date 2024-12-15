import { Component } from '@angular/core';

import { ProductSpecificComponent } from '../../components/product-specific/product-specific.component';

import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductSpecificComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
