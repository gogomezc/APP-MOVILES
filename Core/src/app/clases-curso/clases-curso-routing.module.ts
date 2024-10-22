import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesCursoPage } from './clases-curso.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesCursoPageRoutingModule {}
