import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importar el NAVBAR y el FOOTER
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

// IMPORTAR LAS INTERFASES
import { User } from '../../interfaces/user';

// IMPORTAR EL SERVICIO
import { UserService } from '../../services/user.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  _users = inject(UserService)
  _mensajes = inject(ToastrService)
  allUsers : User[]=[];

  Nombre: string = '';
  Correo: string = '';
  Telefono: number = 0;
  Contrasena: string = '';
  Imagen?: string;
  roleUser?: string;

  // PETICION POST (CREAR)
  crearUsuarios(){
    if(this.Nombre === '' || this.Correo === '' || this.Telefono === 0 || this.Contrasena === ''){
      // this._mensajes.warning('Ingresa los datos solicitados');
    }else{
      const nuevoUsuario: User ={
         Nombre : this.Nombre,
         Correo : this.Correo,
         Telefono : this.Telefono,
         Contrasena: this.Contrasena
      };

      this._users.postUsers(nuevoUsuario).subscribe({
        next: (res:any) =>{
          alert(res.mensaje)
        },
        error: (error: any) =>{
          // Cuando sale incorrecto
          console.log(error)
        }
      });
    };

  };

  // Mostarlo al cargar el contenido de la pagina
  // Usar el metodo -> ngOnInit
  ngOnInit(){
    this.crearUsuarios();
  };
}
