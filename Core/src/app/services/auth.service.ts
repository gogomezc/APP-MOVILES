import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Preferences } from '@capacitor/preferences'; // Cambiado a Preferences
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = (window as any).__env.API_URL_AUTH; // Variable de entorno

  constructor(private http: HttpClient) {}

  // Método para realizar la autenticación
  authenticate(credentials: { correo: string; password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  // Método para guardar el token en el almacenamiento
  async saveToken(token: string) {
    await Preferences.set({
      key: 'auth_token',
      value: token,
    });
  }

  // Método para obtener el token almacenado
  async getToken(): Promise<string | null> {
    const { value } = await Preferences.get({ key: 'auth_token' });
    return value;
  }

  // Método para eliminar el token (logout)
  async clearToken() {
    await Preferences.remove({ key: 'auth_token' });
  }
}
