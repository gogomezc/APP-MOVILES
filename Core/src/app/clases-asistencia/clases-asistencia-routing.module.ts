import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesAsistenciaPage } from './clases-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesAsistenciaPageRoutingModule {}
