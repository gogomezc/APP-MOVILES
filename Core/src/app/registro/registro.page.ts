import { Component } from '@angular/core';
import { RegistroUsersService } from 'src/app/services/registro-users.service';  // Asegúrate de que el camino sea el correcto
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  codigo = '';
  run = '';
  nombre = '';
  apellido = '';
  correo = '';
  perfil = '';
  mensajeError = '';

  constructor(private registroUsersService: RegistroUsersService) {}

  registrarUsuario() {
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
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        this.mensajeError = 'Ocurrió un error al registrar el usuario.';
      }
    );
  }
}
