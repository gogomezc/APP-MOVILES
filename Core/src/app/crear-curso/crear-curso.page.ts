import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import { CursosService } from './../services/cursos.service';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.page.html',
  styleUrls: ['./crear-curso.page.scss'],
})
export class CrearCursoPage implements OnInit {
  cursos: any[] = []; // Almacenar los cursos obtenidos
  nuevoCurso = {
    nombre: '',
    sigla: '',
    institucion: '',
    descripcion: ''
  }; // Modelo del nuevo curso

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private router: Router,
    private CursosService: CursosService,
    private navController: NavController,
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getCursos(); // Obtener cursos al inicializar la página
  }

  async getCursos() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
    });
    await loading.present();

    try {
      // Obtener el token desde el servicio de autenticación
      const token = await this.authService.getToken();
      if (!token) {
        throw new Error('Token no encontrado. Por favor, inicia sesión nuevamente.');
      }

      // Configurar los headers con el Bearer token
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      });

      // Hacer la solicitud GET para obtener los cursos
      const response: any = await this.http.get('https://www.presenteprofe.cl/api/v1/cursos', { headers }).toPromise();
      
      this.cursos = response.cursos || []; // Asignar cursos a la variable

      await this.showToast('Cursos Cargados con exito...');
    } catch (error) {
      console.error('Error al obtener los cursos', error);
      await this.showToast('Error al cargar los cursos: ' + ((error as any).message || error));
    } finally {
      await loading.dismiss();
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  verDetalleCurso(id: number) {
    this.router.navigate(['/curso-detalle', id]);
  }


  async crearCurso() {
    const token = await this.authService.getToken();
    
    if (!token) {
      console.error('Token no encontrado. Por favor, inicia sesión nuevamente.');
      return;
    }

    if (this.nuevoCurso.nombre && this.nuevoCurso.sigla && this.nuevoCurso.institucion && this.nuevoCurso.descripcion) {
      this.CursosService.crearCurso(this.nuevoCurso, token).subscribe(
        (response: any) => {
          console.log('Curso creado exitosamente:', response);
          // Actualizar la lista de cursos después de crear uno nuevo
          this.getCursos();
        },
        (error) => {
          console.error('Error al crear el curso:', error);
        }
      );
    } else {
      console.log('Faltan campos por completar');
    }
  }
  


  goBack() {
    this.navController.pop(); // Retrocede a la página anterior
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Quieres Cerrar Sesion?',
      message: '',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Cierre de sesión confirmado');
            this.navCtrl.navigateRoot('/home'); // Redirige a la página principal (home)
          }
        }
      ]
    });
  
    await alert.present(); // Presentamos la alerta
  }

}
