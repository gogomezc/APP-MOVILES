import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'; 

@Component({
  selector: 'app-dashboard-profe',
  templateUrl: './dashboard-profe.page.html',
  styleUrls: ['./dashboard-profe.page.scss'],
})
export class DashboardProfePage implements OnInit {
  usuario: string = "";
  
  constructor(private route: ActivatedRoute, private menu:MenuController, private navCtrl:NavController,  private alertController: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = params['usuario'] ? params['usuario'] : 'Invitado';
    });
    this.menu.enable(true, 'first');
  }
  // Esta función se invoca cuando el usuario hace clic en el botón "Cerrar sesión"
 async presentAlert() {
  const alert = await this.alertController.create({
    header: '¿Quieres Salir?',
    message: '¡¡Cerraras tu sesion actual!!',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cierre de sesión cancelado');
        }
      },
      {
        text: 'Aceptar',
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
