import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoDetallePage } from './curso-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: CursoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursoDetallePageRoutingModule {}
