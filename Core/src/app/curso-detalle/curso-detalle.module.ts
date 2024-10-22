import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursoDetallePageRoutingModule } from './curso-detalle-routing.module';

import { CursoDetallePage } from './curso-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursoDetallePageRoutingModule
  ],
  declarations: [CursoDetallePage]
})
export class CursoDetallePageModule {}
