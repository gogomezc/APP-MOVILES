import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosotrosAlumnosPageRoutingModule } from './nosotros-alumnos-routing.module';

import { NosotrosAlumnosPage } from './nosotros-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosotrosAlumnosPageRoutingModule
  ],
  declarations: [NosotrosAlumnosPage]
})
export class NosotrosAlumnosPageModule {}
