import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesAsistenciaPageRoutingModule } from './clases-asistencia-routing.module';

import { ClasesAsistenciaPage } from './clases-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesAsistenciaPageRoutingModule
  ],
  declarations: [ClasesAsistenciaPage]
})
export class ClasesAsistenciaPageModule {}
