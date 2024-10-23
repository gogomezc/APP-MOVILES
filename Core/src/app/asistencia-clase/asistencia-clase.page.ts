import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CursosService } from '../services/cursos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia-clase',
  templateUrl: './asistencia-clase.page.html',
  styleUrls: ['./asistencia-clase.page.scss'],
})
export class AsistenciaClasePage implements OnInit {
  asistencias: any[] = [];
  cursoId!: number;
  codigoClase!: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private cursosService: CursosService,
    private navController: NavController,
  ) {}

  ngOnInit() {
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));
    this.codigoClase = this.route.snapshot.paramMap.get('code')!;
    this.obtenerAsistencia();
  }

  async obtenerAsistencia() {
    const token = await this.authService.getToken();
    if (token) {
      this.cursosService.getAsistencia(this.cursoId, this.codigoClase, token).subscribe(
        (response: any) => {
          this.asistencias = response.asistencias;
        },
        (error) => {
          console.error('Error al obtener la asistencia:', error);
        }
      );
    } else {
      console.error('Error: Token inválido o expiró');
    }
  }

  goBack() {
    this.navController.pop(); // Retrocede a la página anterior
  }
}
