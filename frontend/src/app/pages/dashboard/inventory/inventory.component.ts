import { Component, inject } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Products } from '../../../interfaces/products';
import { NgFor } from '@angular/common';
import { TableComponent } from '../../../components/table/table.component';


@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, TableComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
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
