import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  usuario: string = "";

  constructor(
    private route: ActivatedRoute, 
    private menu: MenuController, 
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = params['usuario'] ? params['usuario'] : 'Invitado';
    });
    this.menu.enable(true, 'first');
  }

  ionViewWillEnter(){
    this.menu.enable(true, 'first');
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
