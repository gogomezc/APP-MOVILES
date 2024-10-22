import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasesCursoPageRoutingModule } from './clases-curso-routing.module';

import { ClasesCursoPage } from './clases-curso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesCursoPageRoutingModule
  ],
  declarations: [ClasesCursoPage]
})
export class ClasesCursoPageModule {}
