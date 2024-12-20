import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../components/footer/footer.component';

// IMPORTAR EL MODELO DE DATOS O EL SERVICIO DONDE SE CONECTA CON EL BACKEND
import { AdminService } from '../../services/admin.service';
import { UserService } from '../../services/user.service';

// IMPORTAR LAS INTERFASES
import { Admin } from '../../interfaces/admin';
import { User } from '../../interfaces/user';


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

  // Variables de credenciales
  correo: string = '';
  contrasena: string = '';

  // Almacenar usuarios obtenidos de la base de datos
  allUsers: User[] = [];

  // Datos del administrador
  admin = {
    correo: "ecoclosetAdmin",
    contrasena: "ecocloset"
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
    if (!this.correo || !this.contrasena) {
      alert('Por favor ingresa tu correo y contraseña');
      return;
    }

    // Verificar si es el inicio de sesión del administrador
    if (this.correo === this.admin.correo && this.contrasena === this.admin.contrasena) {
      // Redirigir al panel de administración
      alert('Bienvenido Administrador a Ecocloset');
      this._router.navigate(['/Dashboard']);
    } else {
      // Llamar a obtener los usuarios y validar las credenciales
      this.obtenerUsuarios();

        let usuarioEncontrado = false;

        // Buscar en la lista de usuarios
        for (let i = 0; i < this.allUsers.length; i++) {
          if (this.allUsers[i].Correo === this.correo && this.allUsers[i].Contrasena === this.contrasena) {
            usuarioEncontrado = true;
            break; // Salir del bucle cuando se encuentra una coincidencia
          }
        }

        // Si el usuario es encontrado, redirigir a la página principal
        if (usuarioEncontrado) {
          alert('Bienvenido Usuario a Ecocloset');
          this._router.navigate(['/']);
        } else {
          // Si no se encuentra el usuario, mostrar un mensaje de error
          alert('Correo o contraseña incorrectos');
        }
    }
  }
}


