import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CursosProfePageRoutingModule } from './cursos-profe-routing.module';

import { CursosProfePage } from './cursos-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CursosProfePageRoutingModule
  ],
  declarations: [CursosProfePage]
})
export class CursosProfePageModule {}
