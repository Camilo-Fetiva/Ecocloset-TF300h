import { Component } from '@angular/core';

import { ProductSpecificComponent } from '../../components/product-specific/product-specific.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductSpecificComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
