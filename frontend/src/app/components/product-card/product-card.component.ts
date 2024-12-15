import { Component } from '@angular/core';

// IMPORTAR EL SERVICIO DE CONEXION
import { ProductsService } from '../../services/products.service';

// IMPOTAR EL INJECT
import { inject } from '@angular/core';

// IMPORTAR LA INTERFAZ
import { Products } from '../../interfaces/products';

// IMPORTAR EL NGFOR PARA USAR EL CICLO
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgFor], //<- USO EN EL COMPONENT
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
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
        },
        error: (error: any) =>{
          // Cuando sale incorrecto
          console.log (error);
        }
      }
    );
  };

  // Mostarlo al cargar el contenido de la pagina
  // Usar el metodo -> ngOnInit
  ngOnInit(){
    this.obtenerProductos();
  };

}
