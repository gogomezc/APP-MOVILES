import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nosotros-alumnos',
  templateUrl: './nosotros-alumnos.page.html',
  styleUrls: ['./nosotros-alumnos.page.scss'],
})
export class NosotrosAlumnosPage implements OnInit {

  constructor(private navCtrl: NavController,
              private alertController: AlertController) { }

  ngOnInit() {
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