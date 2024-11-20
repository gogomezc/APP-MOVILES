import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-clases-asistencia',
  templateUrl: './clases-asistencia.page.html',
  styleUrls: ['./clases-asistencia.page.scss'],
})
export class ClasesAsistenciaPage implements OnInit {
  idCurso!: number;
  codigoWeb!: string;
  clase: any = {};
  asistencias: any[] = [];
  totalAsistencias: number = 0;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private cursosService: CursosService
  ) {}

  ngOnInit() {
    this.idCurso = Number(this.route.snapshot.paramMap.get('idCurso'));
    this.codigoWeb = this.route.snapshot.paramMap.get('codigoWeb') || '';
    this.obtenerAsistencias();
  }

  async obtenerAsistencias() {
    const token = await this.authService.getToken();
    if (token) {
      this.cursosService.getAsistencias(this.idCurso, this.codigoWeb, token).subscribe(
        (response: any) => {
          this.clase = response.clase;
          this.totalAsistencias = response.total;
          this.asistencias = response.asistencias;
        },
        (error) => {
          console.error('Error al obtener las asistencias:', error);
        }
      );
    } else {
      console.error('Error: Token inválido o expiró.');
    }
  }
}
