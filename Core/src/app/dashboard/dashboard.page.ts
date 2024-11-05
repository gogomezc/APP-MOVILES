import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  usuario: string = "";

  constructor(private route: ActivatedRoute, 
    private menu:MenuController, 
    private navCtrl:NavController,
    
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(params => {
      this.usuario = params['usuario'] ? params['usuario'] : 'Invitado';
    });
    this.menu.enable(true, 'first');
  }

  ionViewWillEnter(){
    this.menu.enable(true, 'first');
  }
  
  goToContacto(){
      this.navCtrl.navigateForward(['/contacto', { usuario: this.usuario }]);
    }
  }
 