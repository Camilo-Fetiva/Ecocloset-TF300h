import { Component, inject } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Products } from '../../interfaces/products';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-inventory',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-inventory.component.html',
  styleUrl: './card-inventory.component.css'
})

export class CardInventoryComponent {
  // 1. INJECT de las dependencias a usar
  _products = inject(ProductsService)

  // 2. Declaracion de variables
  allProducts : Products[] = []; //Array de productos y la estructura la da la interfase

  // PETICION GET (OBTENER)
  obtenerProductos(){
    // Traer la dependencias del servicio y usar los metodos
    this._products.getProducts().subscribe(
      {
        // Gestionar la respuesta de la peticion
        // Manejo de errores
        next: (res:any) => {
          // Cuando sale correcto
          console.log (res.datos);
          // Guardar los datos en la variable
          this.allProducts = res.datos; 
          console.log (this.allProducts);

          // Llamar al método para mezclar los productos de forma aleatoria
        },
        error: (error: any) =>{
          // Cuando sale incorrecto
          console.log (error);
        }

      }
    );
  }
  // Mostarlo al cargar el contenido de la pagina
  // Usar el metodo -> ngOnInit
  ngOnInit(){
    this.obtenerProductos();
  };
}