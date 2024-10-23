import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaClasePage } from './asistencia-clase.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaClasePageRoutingModule {}
