import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {

  constructor(private navCtrl: NavController,
    private alertController: AlertController) { }

  ngOnInit() {
  }
// Esta función se invoca cuando el usuario hace clic en el botón "Cerrar sesión"
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
