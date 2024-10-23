import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaClasePageRoutingModule } from './asistencia-clase-routing.module';

import { AsistenciaClasePage } from './asistencia-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaClasePageRoutingModule
  ],
  declarations: [AsistenciaClasePage]
})
export class AsistenciaClasePageModule {}
