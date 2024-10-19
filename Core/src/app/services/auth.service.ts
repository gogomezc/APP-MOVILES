import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://www.presenteprofe.cl/api/v1/auth';

  constructor(private http: HttpClient) {}

  // Método para realizar la autenticación
  authenticate(credentials: { correo: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  // Método para guardar el token en el almacenamiento
  async saveToken(token: string) {
    await Storage.set({
      key: 'auth_token',
      value: token,
    });
  }

  // Método para obtener el token almacenado
  async getToken(): Promise<string | null> {
    const { value } = await Storage.get({ key: 'auth_token' });
    return value;
  }

  // Método para eliminar el token (logout)
  async clearToken() {
    await Storage.remove({ key: 'auth_token' });
  }
}
