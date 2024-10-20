import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; // Asegúrate de que este servicio esté creado

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';     // Campo para el nombre de usuario
  password: string = '';    // Campo para la contraseña
  errorMessage: string = ''; // Mensaje de error para validación

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  // Método para validar la entrada del usuario antes de autenticar
  validateInputs() {
    if (!this.usuario || !this.password) {
      // Si alguno de los campos está vacío, se muestra un mensaje de error
      this.errorMessage = 'Por favor, ingresa tu usuario y contraseña.';
    } else {
      // Si ambos campos tienen valores, se procede a autenticar
      this.errorMessage = '';  // Limpiar cualquier mensaje de error previo
      this.goToDashboard();    // Llamar al método de autenticación
    }
  }

  // Método para autenticar y navegar al dashboard
  goToDashboard() {
    const credentials = {
      correo: this.usuario,  
      password: this.password,
    };

    // Llamar al servicio de autenticación
    this.authService.authenticate(credentials).subscribe(
      async (response) => {
        console.log('Respuesta de autenticación:', response);

        // Guarda el token en el almacenamiento si la autenticación es exitosa
        await this.authService.saveToken(response.auth.token);



        // Obtén el perfil del usuario desde la respuesta
      const perfil = response.perfil;
      const username = response.data.nombre_completo || 'Invitado';

        // Navegar según el perfil del usuario
      if (perfil === 'estudiante') {
        // Navegar a la vista para estudiantes
        this.navCtrl.navigateForward(['/dashboard', { usuario: username }]);
      } else if (perfil === 'docente') {
        // Navegar a la vista para profesores
        this.navCtrl.navigateForward(['/nosotros', { usuario: username }]);
      } else {
        // Manejar otros perfiles o redirigir a una vista genérica
        this.navCtrl.navigateForward(['/dashboard', { usuario: username }]);
      }
    },
    (error) => {
      console.error('Error de autenticación:', error);
      // Muestra un mensaje de error si la autenticación falla
      this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
    }
    );
  }
}
