import { Component } from '@angular/core';
import { RegistroUsersService } from 'src/app/services/registro-users.service';  // Asegúrate de que el camino sea el correcto
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  codigo = 'presenteprofe';
  run = '';
  nombre = '';
  apellido = '';
  correo = '';
  perfil = '';
  mensajeError = '';
  

  constructor(private registroUsersService: RegistroUsersService) {}

  registrarUsuario() {
    if (!this.validarRUN(this.run)) {
      this.mensajeError = 'El RUN debe tener el formato XX.XXX.XXX-X.';
      return;
    }
  
    if (!this.perfil) {
      this.mensajeError = 'Por favor, selecciona un perfil válido.';
      return;
    }
  
    const usuario = {
      codigo: this.codigo,
      run: this.run,
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      perfil: this.perfil,
    };
  
    this.registroUsersService.registrarUsuario(usuario).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        alert('Usuario registrado exitosamente.');
        this.mensajeError = '';
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        this.mensajeError = 'Ocurrió un error al registrar el usuario.';
      }
    );
  }
  


  validarRUN(run: string): boolean {
    const regex = /^\d{2}\.\d{3}\.\d{3}-[0-9kK]$/; // Formato XX.XXX.XXX-X
    return regex.test(run);
  }
  
}
