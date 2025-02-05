import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

// IMPORTAR EL MODELO DE DATOS O EL SERVICIO DONDE SE CONECTA CON EL BACKEND
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';

// IMPORTAR LAS INTERFASES
import { Admin } from '../../interfaces/admin';
import { User } from '../../interfaces/user';
import { Login } from '../../interfaces/login';
import { userInfo } from 'os';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  // Métodos de inyección (Angular inject)
  _router = inject(Router);
  _users = inject(UserService);
  _login = inject(LoginService);

  // INFORMACION OBTENIDA DEL FORMULARIO
  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });



  // Almacenar usuarios obtenidos de la base de datos
  allUsers: User[] = [];
  Correo: string = '';
  Contrasena: string = '';

  // Datos del administrador
  admin = {
    Correo: "ecoclosetAdmin",
    Contrasena: "ecocloset",
    Nombre: 'Camilo',
  };

  // Función para obtener los usuarios desde la base de datos
  obtenerUsuarios() {
    this._users.getUsers().subscribe({
      next: (res: any) => {
        this.allUsers = res.datos;
        console.log(this.allUsers);
      },
      error: (error: any) => {
        console.error('Error al obtener los usuarios', error);
        alert('Error al obtener los usuarios');
      }
    });
  }

  // Función de inicio de sesión
  iniciarSesion() {
    // Verificar si los campos están vacíos
    if (!this.Correo || !this.Contrasena) {
      alert('Por favor ingresa tu correo y contraseña');
      return;
    }

    const credenciales: Login = {
      emailLogin: this.Correo,
      passwordLogin: this.Contrasena
    }

    if (credenciales) {
      console.log(credenciales);
      this._login.inicioSesion(credenciales).subscribe({
        next: (res:any)=>{
          if (res){
            console.log(res);
            localStorage.setItem("token", res.token);
            this._login.redireccionar();
          }
        },
        error: (error)=>{
          console.log(error);
        }
      })
    }

  }
}


