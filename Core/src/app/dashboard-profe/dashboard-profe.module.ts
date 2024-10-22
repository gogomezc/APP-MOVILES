import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardProfePageRoutingModule } from './dashboard-profe-routing.module';

import { DashboardProfePage } from './dashboard-profe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardProfePageRoutingModule
  ],
  declarations: [DashboardProfePage]
})
export class DashboardProfePageModule {}
