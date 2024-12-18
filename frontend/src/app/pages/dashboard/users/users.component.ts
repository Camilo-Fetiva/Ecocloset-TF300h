import { Component, inject } from '@angular/core';

// DEPENDENCIAS NECESARIAS
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TableUsersComponent } from "../../../components/table-users/table-users.component";

// USERS
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';

// METODO 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TableUsersComponent, NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // 1. INJECT de las dependencias a usar
  _users = inject(UserService)
    
  // 2. Declaracion de variables
  allUsers : User[] = []; //Array de productos y la estructura la da la interfase

  // PETICION GET (OBTENER)
  obtenerUsuarios(){
    // Traer la dependencias del servicio y usar los metodos
    this._users.getUsers().subscribe(
      {
        // Gestionar la respuesta de la peticion
        // Manejo de errores
        next: (res:any) => {
          // Cuando sale correcto
          console.log (res.datos);
          // Guardar los datos en la variable
          this.allUsers = res.datos; 
          console.log (this.allUsers);

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
    this.obtenerUsuarios();
  };
}
