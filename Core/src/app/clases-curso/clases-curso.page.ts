import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CursosService } from '../services/cursos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-clases-curso',
  templateUrl: './clases-curso.page.html',
  styleUrls: ['./clases-curso.page.scss'],
})
export class ClasesCursoPage implements OnInit {
  clases: any[] = [];
  cursoId!: number;

  nuevaClase = {
    fecha: '',
    hora_inicio: '',
    hora_termino: ''
  };

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private cursosService: CursosService,
    private navController: NavController,
  ) {}

  ngOnInit() {
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));
    this.obtenerClases();
  }

  async obtenerClases() {
    const token = await this.authService.getToken();
    if (token) {
      this.cursosService.getClases(this.cursoId, token).subscribe(
        (response: any) => {
          this.clases = response.clases; 
        },
        (error: any) => {
          console.error('Error al obtener las clases:', error);
        }
      );
    } else {
      console.error('Error: Token invalido o expiró');
    }
  }

  async crearClase() {
    const token = await this.authService.getToken();
    if (token) {
      const claseData = {
        fecha: this.nuevaClase.fecha,
        hora_inicio: this.nuevaClase.hora_inicio,
        hora_termino: this.nuevaClase.hora_termino
      };

      this.cursosService.crearClase(this.cursoId, claseData, token).subscribe(
        (response: any) => {
          console.log('Clase creada:', response);
          this.obtenerClases(); // Actualiza la lista de clases
          // Resetea el formulario
          this.nuevaClase = {
            fecha: '',
            hora_inicio: '',
            hora_termino: ''
          };
        },
        (error: any) => {
          console.error('Error al crear la clase:', error);
        }
      );
    } else {
      console.error('Error: Token invalido o expiró');
    }
  }

  goBack() {
    this.navController.pop(); // Retrocede a la página anterior
  }
}
