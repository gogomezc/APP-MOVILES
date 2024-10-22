import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-profe',
  templateUrl: './dashboard-profe.page.html',
  styleUrls: ['./dashboard-profe.page.scss'],
})
export class DashboardProfePage implements OnInit {
  usuario: string = "";
  
  constructor(private route: ActivatedRoute, private menu:MenuController, private navCtrl:NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = params['usuario'] ? params['usuario'] : 'Invitado';
    });
    this.menu.enable(true, 'first');
  }

}
