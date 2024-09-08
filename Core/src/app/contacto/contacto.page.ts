import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  usuario: string = "";
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private menu:MenuController, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.usuario = params['usuario'] ? params['usuario'] : 'Invitado';
    });


    this.menu.enable(true, 'first');
  }

  ionViewWillEnter(){
    this.menu.enable(true, 'first');
  }
  
  
  
  onSubmit() {
    console.log('Formulario enviado', this.contact);
    
  }
}