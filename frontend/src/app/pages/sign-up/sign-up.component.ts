import { Component, inject } from '@angular/core';

// Importar el NAVBAR y el FOOTER
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

// IMPORTAR LAS INTERFASES
import { User } from '../../interfaces/user';

// IMPORTAR EL SERVICIO
import { UserService } from '../../services/user.service';

// IMPORTAR EL NGFOR PARA USAR EL CICLO
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, NgFor],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  _users = inject(UserService)
  allUsers : User[]=[];

  Nombre: string = '';
  Correo: string = '';
  Telefono: number = 0;
  Contrasena: string = '';
  Imagen?: string;
  roleUser?: string;

  // PETICION POST (CREAR)
  crearUsuarios(){
  //   if(this.Nombre === '' || this.Correo === '' || this.Telefono === 0 || this.Contrasena === ''){
  //     alert('Ingrese los datos');
  //   }else{
  //     const nuevoUsuario: User ={
  //        Nombre : this.Nombre,
  //        Correo : this.Correo,
  //        Telefono : this.Telefono,
  //        Contrasena: this.Contrasena
  //     };
  //   }

  //   this._users.postUsers().subscribe({
  //     next: (res:any) =>{
  //       this.allUsers = res.datos;
  //     },

  //     error: (error: any) =>{
  //       // Cuando sale incorrecto
  //       console.log (error);
  //     }
  //   }
  // )
  };

  // Mostarlo al cargar el contenido de la pagina
  // Usar el metodo -> ngOnInit
  ngOnInit(){
    this.crearUsuarios();
  };
}
