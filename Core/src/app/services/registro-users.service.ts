import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './configservice.service';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsersService {

  constructor(private http: HttpClient, private configService: ConfigService) {}

  // Función para registrar el usuario
  registrarUsuario(usuario: any) {
    const apiUrl = this.configService.getApiUrlUsuarios();  // Obtiene la URL de la API
    return this.http.post(apiUrl, usuario);
  }
}

