import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosotrosAlumnosPage } from './nosotros-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: NosotrosAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosotrosAlumnosPageRoutingModule {}
