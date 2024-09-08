import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string="";
  password: string="";
  

  constructor(private navCtrl: NavController) {}

  goToDashboard(){
    const nombreUsuario = this.usuario ? this.usuario: 'Invitado';
    this.navCtrl.navigateForward(['/dashboard', { usuario: this.usuario }]);
  }
}
