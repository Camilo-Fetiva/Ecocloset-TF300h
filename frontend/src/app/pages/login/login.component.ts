import { Component, inject} from '@angular/core';
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

// METODO SENCILLO
router = inject(Router);

admin = {
  correo: "ecoclosetAdmin",
  contrasena: "ecocloset"
}

correo: string = '';
contrasena: string = '';

iniciarSesion() {
  if (this.correo === this.admin.correo && this.contrasena === this.admin.contrasena) {
    // Redirigir al usuario a otra página
    alert('Bienvenido a Ecocloset');
    this.router.navigate(['/Dashboard']);
    
  } else {
    // Mostrar un mensaje de error o realizar otra acción
    alert('Correo o contraseña incorrectos');
  }
}

// -------------------------------------------------------------------------------


//   router = inject(Router);
//   // 1. INJECT de las dependencias a usar
//     _admin = inject(AdminService)
//     _user = inject(UserService)

//   // 2. Declaracion de variables
//     allAdmin : Admin [] = []; //Array de administradores 
//     allUsers : User [] = []; //Array de usuarios

//   correo: string = '';
//   contrasena: string = '';

//   // 3.Traer la dependencias del servicio y usar los metodos
//   obtenerAdmins(){
//     this._admin.getAdmin().subscribe({
//       next: (res:any) => {
//         console.log ('Admins obtenidos:', res);
//           // Guardar los datos en la variable
//           this.allAdmin = res; 
//       },
//       error: (err) => {
//         console.error('Error al obtener administradores:', err);
//       }
//     });
//   }

//   obtenerUsuarios() {
//     this._user.getUsers().subscribe({
//       next: (res: any) => {
//         console.log('Usuarios obtenidos:', res);
//         this.allUsers = res; // Asignar respuesta al array allUsers
//       },
//       error: (err) => {
//         console.error('Error al obtener usuarios:', err);
//       }
//     });
//   }
//   // 4. Método para iniciar sesión
//   iniciarSesion() {
//     // Validar las credenciales de los administradores
//     const admin = this.allAdmin.find(admin => admin.Correo === this.correo && admin.Contrasena === this.contrasena);
//     if (admin) {
//       // Redirigir al Dashboard de admin
//       alert('Bienvenido Admin');
//       this.router.navigate(['/Dashboard']);
//       return;
//     }

//    // Validar las credenciales de los usuarios
//    const user = this.allUsers.find(user => user.Correo === this.correo && user.Contrasena === this.contrasena);
//    if (user) {
//      // Redirigir a la página de usuario
//      this.router.navigate(['/']);
//      return;
//    }

//    // Si no se encuentra el usuario ni el admin, mostrar error
//    console.log('Correo o contraseña incorrectos');
//    alert('Correo o contraseña incorrectos');
//  }

 
}
