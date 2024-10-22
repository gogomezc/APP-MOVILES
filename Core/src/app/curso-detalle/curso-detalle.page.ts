import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Servicio de autenticación
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CursosService } from '../services/cursos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.page.html',
  styleUrls: ['./curso-detalle.page.scss'],
})
export class CursoDetallePage implements OnInit {
  curso: any;  // Aquí almacenaremos los detalles del curso
  apiUrl = 'https://www.presenteprofe.cl/api/v1/cursos'; // Base URL de la API
  clases: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService, 
    private http: HttpClient,
    private cursosService: CursosService,
    private navController: NavController,
  ) {}

  async ngOnInit() {
    // Obtener el ID del curso de la ruta
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerDetalleCurso(id);
    }
  }

  // Método para obtener los detalles del curso
  async obtenerDetalleCurso(id: string) {
    const token = await this.authService.getToken();
    if (!token) {
      console.error('Token no encontrado.');
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    try {
      const response = await this.http.get(`${this.apiUrl}/${id}`, { headers }).toPromise();
      this.curso = (response as any).curso;  // Almacenar el curso en la variable
    } catch (error) {
      console.error('Error al obtener detalles del curso:', error);
    }
  }
  async verClases(cursoId: number) {
    const token = await this.authService.getToken();
    if (token) {
      this.cursosService.getClases(cursoId, token).subscribe(
        (response: any) => {
          this.clases = response.clases;
          console.log('Clases del curso:', this.clases);
        },
        (error) => {
          console.error('Error al obtener las clases:', error);
        }
      );
    } else {
      console.error('Token no encontrado.');
    }
  }

  goBack() {
    this.navController.pop(); // Retrocede a la página anterior
  }



}
